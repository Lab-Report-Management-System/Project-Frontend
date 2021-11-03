import defaultSettings from '@/settings'

const title = defaultSettings.title || '实验报告管理系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
