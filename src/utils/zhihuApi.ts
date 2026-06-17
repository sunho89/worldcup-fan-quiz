// 知乎社区 API
// 发布想法到知乎圈子
// 文档: https://openapi.zhihu.com/openapi/publish/pin

const APP_KEY = 'sui-feng-er-shi-92-96' // 用户token
const APP_SECRET = 'czkixDDFKOLSLdnwNFzdcMvXprV5G7Ek'

// 支持的圈子
export const RING_IDS = {
  'openclaw': '2001009660925334090',      // OpenClaw 人类观察员
  'a2a': '2015023739549529606',            // A2A for Reconnect
  'hackathon': '2029619126742656657',      // 黑客松脑洞补给站
}

// 当前使用的圈子（黑客松脑洞补给站）
export const CURRENT_RING_ID = RING_IDS.hackathon

// API 基础路径
const API_BASE = 'https://openapi.zhihu.com'

// 生成签名
async function generateSignature(timestamp: string, logId: string): Promise<string> {
  const signStr = `app_key:${APP_KEY}|ts:${timestamp}|logid:${logId}|extra_info:`

  const encoder = new TextEncoder()
  const keyData = encoder.encode(APP_SECRET)
  const messageData = encoder.encode(signStr)

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )

  const signature = await crypto.subtle.sign('HMAC', cryptoKey, messageData)

  // Convert to Base64
  const bytes = new Uint8Array(signature)
  let binary = ''
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

// 生成请求头
async function generateHeaders(): Promise<Record<string, string>> {
  const timestamp = Math.floor(Date.now() / 1000).toString()
  const logId = `quiz_${Date.now()}_${Math.random().toString(36).substring(7)}`
  const sign = await generateSignature(timestamp, logId)

  return {
    'X-App-Key': APP_KEY,
    'X-Timestamp': timestamp,
    'X-Log-Id': logId,
    'X-Sign': sign,
    'X-Extra-Info': '',
    'Content-Type': 'application/json',
  }
}

// 发布结果
export interface PublishResult {
  success: boolean
  message: string
  content_token?: string
}

// 发布想法到知乎圈子
export async function publishToZhihu(
  fanTypeName: string,
  fanTypeEmoji: string,
  teams: string[],
  quote: string
): Promise<PublishResult> {
  const content = `⚽ 世界杯球迷人格测试

我是「${fanTypeEmoji} ${fanTypeName}」球迷！

本命球队：${teams.join(' / ')}
"${quote}"

#足球季VibeCoding挑战赛 #世界杯

👇 来测测你是哪种球迷？`

  try {
    const headers = await generateHeaders()

    const response = await fetch(`${API_BASE}/openapi/publish/pin`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        title: `我是「${fanTypeEmoji} ${fanTypeName}」球迷！`,
        content,
        ring_id: CURRENT_RING_ID,
      }),
    })

    const result = await response.json()

    if (result.status === 0) {
      return {
        success: true,
        message: '发布成功！',
        content_token: result.data?.content_token,
      }
    } else {
      return {
        success: false,
        message: result.msg || result.error?.message || '发布失败',
      }
    }
  } catch (error) {
    console.error('Publish error:', error)
    return {
      success: false,
      message: '网络错误，请检查网络后重试',
    }
  }
}
