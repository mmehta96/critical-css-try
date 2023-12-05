export default function Home() {
  return (
    <>
        <h1>Critical CSS Demo - Optimized</h1>
        <h3>On this demo, the critical styles are inlined, while the non-critical ones, are deferred.</h3>
        <button className="accordion-btn">Click to see a paragraph styled with set of styles #1.</button>
        <div className="container">
            <p>This is an example of a paragraph that uses <strong>line breaks</strong> for text. This is an example of a paragraph that uses <strong>line breaks</strong> for text. This is an example of a paragraph that uses <strong>line breaks</strong> for text. This is an example of a paragraph that uses <strong>line breaks</strong> for text. This is an example of a paragraph that uses <strong>line breaks</strong> for text. This is an example of a paragraph that uses <strong>line breaks</strong> for text. This is an example of a paragraph that uses <strong>line breaks</strong> for text.</p>
        </div>
        {/*<script>*/}
        {/*  var accordionBtn = document.getElementsByClassName("accordion-btn");*/}
        {/*  for (let i = 0; i < accordionBtn.length; i++) {*/}
        {/*  accordionBtn[i].addEventListener("click", function() {*/}
        {/*    var container = this.nextElementSibling;*/}
        {/*    if (container.style.display === "block") {*/}
        {/*      container.style.display = "none";*/}
        {/*    } else {*/}
        {/*      container.style.display = "block";*/}
        {/*    }*/}
        {/*  });*/}
        {/*}*/}
        {/*</script>*/}
    </>
  )
}
