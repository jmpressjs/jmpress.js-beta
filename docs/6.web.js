webpackJsonp(6,{31:function(a,b,c){a.exports='<h1>Basic Usage</h1><p><strong>Create a root element:</strong></p><div><pre>&lt;div id=&quot;jmpress&quot;&gt;&lt;/div&gt;</pre><p></p></div><p><strong>Fill it up with steps:</strong></p><div><pre>&lt;div id=&quot;jmpress&quot;&gt;<br/>	&lt;div class=&quot;step&quot;&gt;Slide 1&lt;/div&gt;<br/>	&lt;div class=&quot;step&quot;&gt;Slide 2&lt;/div&gt;<br/>&lt;/div&gt;</pre><p></p></div><p><strong>Tell jQuery to run it:</strong></p><div><pre>$(function() {<br/>	$(&#39;#jmpress&#39;).jmpress();<br/>});</pre><p></p></div><p><strong>Configure jmpress</strong></p><div><pre>$(&#39;#jmpress&#39;).jmpress({<br/>	stepSelector: &#39;li&#39;<br/>});</pre><p></p></div><p>See more <a href="#docs-options">options</a>.</p><p><strong>Customize the hash id of each slide</strong><br/>The id of the step will appear as the URI hash to recall the slide later. If you don&#39;t give your steps ids then the id <code>step-N</code> will be used.</p><div><pre>&lt;div id=&quot;name-of-slide&quot; class=&quot;step&quot; <br/>		data-x=&quot;3500&quot; data-y=&quot;-850&quot; <br/>		data-rotate=&quot;270&quot; data-scale=&quot;6&quot;&gt;<br/>	Slide 1<br/>&lt;/div&gt;</pre><p></p></div><p><strong>Load slides dynamically</strong><br/>You can load a slide dynamically by setting the <em>data-src</em> or <em>href</em> attribute on the slide. The slide will only be loaded when an adjacent slide or the slide itself is selected.</p><div><pre>&lt;div class=&quot;step&quot; data-src=&quot;slides/slide-1.html&quot; data-x=&quot;500&quot; data-y=&quot;300&quot;&gt;<br/>	Loading...<br/>&lt;/div&gt;</pre><p></p></div>'}})