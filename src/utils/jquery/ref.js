<script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.2.0/dist/web3.min.js"></script>
<script charset="utf-8"
        src="https://cdn.ethers.io/scripts/ethers-v4.min.js"
        type="text/javascript">
</script>

<script>

<--Code goes here-->

</script>


$("*[id*=isMintedButton]:visible").each(function() {
  console.log($(this))
})

$("*[id*=isMintedButton]:visible").each(function() {
  isMinted(
      $(this)
          .siblings()
          .text(),
  ).then(console.log)
})

$("*[id*=isMintedButton]:visible").each(function() {
  isMinted(
      $(this)
          .siblings()
          .text(),
  ).then(x => {
      console.log("what is x? ", x)

      if (x) {
          $(this).css("background-color", "green")
          $(this).html("Minted")
      } else {
          $(this).css("background-color", "grey")
          $(this).html("Mint Now")
          $(this).click(function() {
              mintToken(
                  $(this)
                      .siblings()
                      .text(),
              )
          })
      }
  })
})