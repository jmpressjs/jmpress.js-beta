webpackJsonp(25,{52:function(a,b,c){a.exports="<h1>Templates</h1><p>This component handles templates. It handles the <code>data-template</code> attribute and registers the template.</p><p>For more complex builds consider using templates rather then setting attributes on each step.</p><p>First create and register your template with jmpress:</p><div><pre>$.jmpress(&quot;template&quot;, &quot;mytemplate&quot;, {<br/>  x: 1000, y: -2000, scale: 10,<br/>  rotateY: 60,<br/>  rotate: { x: 60 } // is automatically converted to camel case<br/>});</pre><p></p></div><p>Then use your template in your HTML:</p><div><pre>&lt;div id=&quot;jmpress&quot;&gt;<br/>  &lt;div class=&quot;step&quot; data-template=&quot;mytemplate&quot;&gt;...&lt;/div&gt;<br/>  ...<br/>&lt;/div&gt;</pre><p></p></div><p>Templates can also be applied to nested steps:</p><div><pre>&lt;div id=&quot;jmpress&quot;&gt;<br/>  &lt;div class=&quot;step&quot; data-template=&quot;mytemplate&quot;&gt;<br/>    &lt;div class=&quot;step&quot;&gt;...&lt;/div&gt;<br/>    &lt;div class=&quot;step&quot;&gt;...&lt;/div&gt;<br/>    &lt;div class=&quot;step&quot;&gt;...&lt;/div&gt;<br/>  &lt;/div&gt;<br/>&lt;/div&gt;</pre><p></p></div><div><pre>$.jmpress(&quot;template&quot;, &quot;mytemplate&quot;, {<br/>  x: 1000, y: -2000, scale: 10,<br/>  children: [<br/>    { x: -300, y: -100, scale: 0.2 },<br/>    { x: -100, y: -100, scale: 0.2 },<br/>    { x: 100, y: -100, scale: 0.2 }<br/>  ]<br/>});</pre><p></p></div><p>Rather then setting the values manually you can provide a method to setup each step programmatically:</p><div><pre>&lt;div id=&quot;jmpress&quot; data-template=&quot;mytemplate&quot;&gt;<br/>	&lt;div class=&quot;step&quot;&gt;<br/>		&lt;div class=&quot;step&quot;&gt;...&lt;/div&gt;<br/>		&lt;div class=&quot;step&quot;&gt;...&lt;/div&gt;<br/>		&lt;div class=&quot;step&quot;&gt;...&lt;/div&gt;<br/>	&lt;/div&gt;<br/>	&lt;div class=&quot;step&quot;&gt;<br/>		&lt;div class=&quot;step&quot;&gt;...&lt;/div&gt;<br/>	&lt;/div&gt;<br/>&lt;/div&gt;</pre><p></p></div><div><pre>$.jmpress(&quot;template&quot;, &quot;mytemplate&quot;, {<br/>	children: function( idx, current_child, children ) {<br/>		return {<br/>			y: 400<br/>			,x: -300 + idx * 300<br/>			,template: &quot;mytemplate&quot;<br/>			,scale: 0.3<br/>		}<br/>	}<br/>});</pre><p></p></div><h2><code>method</code> template( templateName, templateData )</h2><p>Adds or modify a template. If it&#39;s already defined then the old template is<br/>extended with the new properties.</p><h2><code>method</code> apply( selector, templateName )</h2><p>Applies the template to all selected steps.</p><h2><code>method</code> apply( selector, templateData )</h2><p>Applies the template directly by template data object.</p><h2><code>method</code> apply( selector, arrayOfTemplateDatas )</h2><p>Applies template data to an array of selected items.</p>"}})