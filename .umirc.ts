import { defineConfig } from 'dumi';
export default defineConfig({
  title: 'garron',
  favicon:
    '/logo.svg',
  logo: '/logo.svg',
  mode: 'site',
  navs: [
    {
      title: '指南',
      path: '/guide',
    }, 
    {
      title: 'Utils',
      path: '/utils',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi',
    }
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
      }
    ],
    "/utils":[
      {
        title:'Array(数组)',
        children:[
          '/arrays/chunk',
          '/arrays/sample',
        ]
      },
      {
        title:'collections(集合)',
        children:[
          '/collections/coll',
        ]
      },
      {
        title:'functions(函数)',
        children:[
          '/functions/debounce',
          '/functions/throttle',
        ]
      },
      {
        title:'objects(对象)',
        children:[
          
        ]
      },
      {
        title:'utility(工具)',
        children:[
          '/utility/fetch',
        ]
      },
      {
        title:'string(字符串)',
        children:[
          '/string',
        ]
      }
    ]
  },
});
