webpackJsonp(12,{41:function(a,b,c){a.exports='<h1>Contribute</h1><p>We are always looking for more contributors and there are many ways you can help!</p><ul><li>Open an <a href="https://github.com/shama/jmpress.js/issues">issue</a> for a bug or a feature request</li><li>Send us a message if you&#39;re using jmpress.js</li><li>Add/update the test cases</li><li>Fix a bug or write a feature then submit a pull request</li></ul><p>Thank you for using and contributing to jmpress.js!</p><h2>Edit &amp; Build</h2><p>All the source files are located in the <code>src/</code> folder. They are broken up into components and plugins to allow users to build their own <a href="#builder">customized version</a> of jmpress.js.</p><h3>Grunt</h3><p>We use the command line build tool: <a href="https://github.com/cowboy/grunt">grunt</a>. It requires Node.js. If you already have Node.js installed, navigate to your copy of jmpress.js and run the command: <code>npm link</code> to install any development dependencies. It is recommended to install grunt globally with <code>npm install grunt -g</code>.</p><p>Then navigate to your copy of jmpress.js and run the command: <code>grunt</code> to build. You can also use the command <code>grunt watch</code> to continuously build jmpress.js as you edit.</p><p>The output files will be located in the <code>dist/</code> folder. Additionally <code>docs/asserts</code> and <code>docs/index.html</code> are output files for the documentation. Please do not edit any file in this folders as they are automatically generated. You can delete them and they will be regenerated.</p><p>Files in <code>docs/asserts</code> will have a hash of the content in their name (for better caching), so if you compile often there may be many different files in the folder. You can delete those as well.</p><h3>Testing</h3><p>To run the tests, the grunt testing module <code>PhantomJS</code> must be installed. Unfortunately, this cannot be installed via npm or grunt itself, so the installation must be done manually. Please look at the <a href="https://github.com/cowboy/grunt/blob/master/docs/faq.md#why-does-grunt-complain-that-phantomjs-isnt-installed-%E2%9A%91">PhantomJS documentation</a> for ways to install on your system.</p><p>After you have installed PhantomJS, you can run the tests via <code>grunt qunit</code>.</p><h2>Pull Requests</h2><p>Good news! We accept pull requests!</p><p>Please work and pull against the <code>dev</code> branch to make sure you are using the latest code. Thanks!</p><h2>Tests</h2><p>jmpress.js uses <a href="http://docs.jquery.com/QUnit">QUnit</a> for testing. Please run <code>/tests/</code> in your browser to run the tests or the command: <code>grunt qunit</code>.</p><p><em>Currently the tests need a lot of catching up. Any help you can provide will be very much appreciated.</em></p><h2>Docs</h2><p>If you find an error or something missing please edit and submit a pull request. There is an <strong>Edit This Page</strong> button in the top right corner.</p>'}})