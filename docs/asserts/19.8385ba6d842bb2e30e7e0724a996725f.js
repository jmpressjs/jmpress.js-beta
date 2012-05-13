webpackJsonp(19,{53:function(a,b,c){a.exports='<h1>Writing a Plugin</h1><p>To extend jmpress.js, simply create a new js file and then add the script to your website or presentation HTML. It is wise to wrap your plugin within a closure:</p><pre class="language-javascript">(function( $, document, window, undefined ) {<br/>	// Plugin Code Will Go Here<br/>}(jQuery, document, window));</pre><p>Now we can add a new option to jmpress by using the defaults method:</p><pre class="language-javascript">(function( $, document, window, undefined ) {<br/>	$.jmpress(&quot;defaults&quot;).withMeat = &#39;Yum! Meat!&#39;;<br/>})(jQuery, document, window);</pre><p>Now the config option &#39;withMeat&#39; will be settable when initiating jmpress and will default to &#39;Yum! Meat!&#39;. Let&#39;s go further and add some more meat to our plugin:</p><pre class="language-javascript">(function( $, document, window, undefined ) {<br/>	$.jmpress(&quot;defaults&quot;).withMeat = &#39;Yum! Meat!&#39;;<br/>	function meat( step, what ) {<br/>		$(step).html( what );<br/>	}<br/>	$.jmpress(&#39;initStep&#39;, function( step, eventData ) {<br/>		meat( step, eventData.settings.withMeat );<br/>	});<br/>}(jQuery, document, window));</pre><p>We have created a &#39;meat&#39; method available only within our plugin. Then we are calling this method as each step is initialized to replace the HTML in every step to &#39;Yum! Meat!&#39;.</p><p>You can add your own events to jmpress using the &#39;register&#39; method and then call it upon an event:</p><pre class="language-javascript">(function( $, document, window, undefined ) {<br/>	$.jmpress(&quot;defaults&quot;).withMeat = &#39;Yum! Meat!&#39;;<br/>	$.extend(true, $.jmpress(&#39;defaults&#39;).keyboard.keys, {<br/>		77: &#39;meat&#39; // &#39;m&#39; key for meat<br/>	});<br/>	$.jmpress(&quot;register&quot;, &quot;meat&quot;, function() {<br/>		var step = $(this).jmpress(&#39;active&#39;)<br/>		step.html( $(this).jmpress(&quot;settings&quot;).withMeat );<br/>	});<br/>}(jQuery, document, window));</pre><p>With this plugin, any time the &#39;m&#39; key is pressed the active slide HTML will be replace with &#39;Yum! Meat!&#39;.</p><p>Take a look at the core plugins in jmpress.js or the extra plugins in the <code>/plugins</code> folder for more examples.</p><p>If you have written a plugin for jmpress.js please let us know!</p>'}})