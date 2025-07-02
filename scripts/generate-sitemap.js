import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 扫描pages目录，获取所有页面
function getPages(dir, basePath = '') {
  const pages = []
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // 跳过api目录和特殊目录
      if (file !== 'api' && !file.startsWith('_')) {
        pages.push(...getPages(filePath, path.join(basePath, file)))
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      // 跳过特殊文件
      if (!file.startsWith('_') && file !== 'sitemap.xml.tsx') {
        const pageName = file.replace(/\.(tsx|ts|js|jsx)$/, '')
        const route = path.join(basePath, pageName === 'index' ? '' : pageName)
        pages.push(route)
      }
    }
  }

  return pages
}

// 生成sitemap XML
function generateSitemap(pages, baseUrl, minify = false) {
  const urls = pages
    .map(page => {
      // 清理路径，移除可能的点号
      const cleanPage = page.replace(/^\.\/?/, '').replace(/\/\.$/, '')
      const url = cleanPage === '' ? `${baseUrl}/` : `${baseUrl}/${cleanPage}`

      if (minify) {
        return `<url><loc>${url}</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>weekly</changefreq><priority>${
          cleanPage === '' ? '1.0' : '0.8'
        }</priority></url>`
      } else {
        return `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${cleanPage === '' ? '1.0' : '0.8'}</priority>
      </url>`
      }
    })
    .join(minify ? '' : '\n')

  if (minify) {
    return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
  } else {
    return `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
  </urlset>`
  }
}

// 主函数
function main() {
  const pagesDir = path.join(__dirname, '../src/pages')
  const baseUrl = 'https://geoochi.site'

  // 检查是否有 --minify 参数
  const minify = process.argv.includes('--minify')

  if (!fs.existsSync(pagesDir)) {
    console.error('Pages directory not found!')
    process.exit(1)
  }

  const pages = getPages(pagesDir)
  const sitemap = generateSitemap(pages, baseUrl, minify)

  // 写入public目录
  const outputPath = path.join(__dirname, '../public/sitemap.xml')
  fs.writeFileSync(outputPath, sitemap)

  console.log(`✅ Sitemap generated with ${pages.length} pages:${minify ? ' (minified)' : ''}`)
  pages.forEach(page => {
    // 清理路径，移除可能的点号
    const cleanPage = page.replace(/^\.\/?/, '').replace(/\/\.$/, '')
    console.log(`  - ${cleanPage === '' ? '/' : `/${cleanPage}`}`)
  })
  console.log(`\n📁 Sitemap saved to: ${outputPath}`)
  console.log(`🌐 Access at: ${baseUrl}/sitemap.xml`)
}

main()
