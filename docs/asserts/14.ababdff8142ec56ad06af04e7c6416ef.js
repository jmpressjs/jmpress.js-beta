webpackJsonp(14,{60:function(a,b,c){a.exports='<h1>Ways Routing</h1><p>This component handles the <code>data-next</code> and <code>data-prev</code> attributes and the route command. As it should override the natural flow of the steps, it should be included after the Circular Stepping component.</p><p>By default, jmpress.js will flow through each step linearly down the DOM. You have a couple of ways to modify the flow.</p><p>Inline Next / Prev</p><pre class="language-html">&lt;div id=&quot;jmpress&quot;&gt;<br/>	&lt;div class=&quot;step&quot; id=&quot;a&quot; data-next=&quot;c&quot;&gt;A&lt;/div&gt;<br/>	&lt;div class=&quot;step&quot; id=&quot;b&quot;&gt;B&lt;/div&gt;<br/>	&lt;div class=&quot;step&quot; id=&quot;c&quot;&gt;C&lt;/div&gt;<br/>	&lt;div class=&quot;step&quot; id=&quot;d&quot;&gt;D&lt;/div&gt;<br/>&lt;/div&gt;</pre><p>The flow will start with A, goto C, then D and back to A. Only when the user is on C and goes back will they be shown B.</p><p>Using route:</p><p>You can set the flow using the route method. You also don&#39;t have to define all the steps. The commando will preserve the natural flow and only modify the indicated steps.</p><pre class="language-javascript">$(&quot;#jmpress&quot;).jmpress(&quot;route&quot;, [&quot;#a&quot;, &quot;#c&quot;, &quot;#b&quot;, &quot;#d&quot;]);</pre><p>The flow will start with A, goto C, goto B, goto D and back to A. If the user goes backwards he will get the same flow D -&gt; B -&gt; C -&gt; A -&gt; D.</p><p>Unidirectional:</p><pre class="language-javascript">$(&quot;#jmpress&quot;).jmpress(&quot;route&quot;, [&quot;#a&quot;, &quot;#c&quot;], true);</pre><p>The flow will be as the flow above with data attributes.  Forwards: A -&gt; C -&gt; D -&gt; A. Backwards: D -&gt; C -&gt; B -&gt; A -&gt; D.</p><p>If you omit the 4th parameter, the function will set the forward flow. Set it to <code>true</code> to set the backward flow.</p>'}})