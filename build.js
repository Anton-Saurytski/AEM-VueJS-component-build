const rollup = require( 'rollup' )
const fs     = require('fs')
const path   = require('path')
const vue    = require('rollup-plugin-vue')
const buble  = require('rollup-plugin-buble')

function compileComponent(file){

  // get component name from file name (file: a.vue, name: a)
  var name = file.substring(0, file.lastIndexOf('.')).toLowerCase()
  // each component needs a unique module name
  var moduleName
  if(name === 'page'){
    moduleName = 'aemVue' + name.charAt(0).toUpperCase() + name.slice(1)
  } else {
    moduleName = 'component' + name.charAt(0).toUpperCase() + name.slice(1)
  }

  // compile the Vue component and give us a .js and .css
  rollup.rollup({
    entry: `src/${name}.vue`,
    plugins: [ 
      vue({
        compileTemplate: true,
        css: `./dist/${name}.css`
      }), 
      buble() 
    ]
  }).then( function(bundle) {

    bundle.write({
      format: 'iife',
      moduleName: moduleName,
      dest: `./dist/${name}.js`
    })
    // alternate method for bundle.write
    // var result = bundle.generate({
    //   format: 'iife',
    //   moduleName: moduleName,
    //   dest: `./dist/${name}.js`
    // })
    // fs.writeFile(`dist/${name}.js`, result.code, 'utf8', function(err) {
    //   if(err){ console.log('err: ', err) }
    // })
  })
}

fs.readdir(path.normalize(__dirname + '/src'), function(err, files) {
  if(err){ console.log('err:', err) }
  // filter out any files that are not *.vue components 
  files.filter(file => file.includes('.vue')).map(compileComponent)
})
