webpackJsonp(21,{56:function(a,b,c){a.exports='<h1>Plugin: Secondary</h1><p>The secondary plugin applies an alternative step config, on a choosen condition.</p><p><em>Alternative step configuration is only useable via template.</em></p><h2>Conditions</h2><p>The condition can only be set by template <code>{ secondary: &lt;string&gt; }</code>.</p><ul><li><code>self</code>: If the step is active.</li><li><code>siblings</code>: If a sibling is active. (Including self)</li><li><code>siblings self</code>: If a sibling is active. (Excluding self)</li><li><code>grandchildren</code>: If a child or grand child is active.</li><li><code>grandchildren self</code>: If the step, a child or grand child is active.</li></ul><h2>Alternative config</h2><p>The alternative config is described by prefixing the attribute by <code>secondary</code> (But stay in camel case).</p><p>Alternative <code>{ x: ..., rotateZ: ... }</code> is <code>{ secondaryX: ..., secondaryRotateZ: ... }</code>.</p><p>Because objects in templates are automatically expanded it can be simplified:</p><pre class="language-javascript">{<br/>	x: ...,<br/>	rotateZ: ...,<br/>	secondary: {<br/>		&quot;&quot;: &quot;siblings&quot;,<br/>		x: ...,<br/>		rotateZ: ...,<br/>	}<br/>}</pre><h2>Examples</h2><ul><li><a href="http://shama.github.com/jmpress.js/examples/vacation/">vacation</a></li><li><a href="http://shama.github.com/jmpress.js/examples/tab-control/">tab control</a></li></ul>'}})