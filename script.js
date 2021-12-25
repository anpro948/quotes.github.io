var quotes = [
    'Thất bại thật sự không phải là kết quả không được như ý muốn mà là khi ta đang nắm giữ trong tay nhưng không biết trân trọng mà lại tùy tiện và dễ dàng từ bỏ khi chưa nếm trải qua hay quyết tâm giữ lấy.',
    'Kim đồng hồ có thể quay lại chỗ cũ, nhưng không còn ngày hôm qua nữa rồi...',
    'Một đứa trẻ hỏi Thượng đế: "Nếu mọi thứ đều đã được viết vào số mệnh, vậy tại sao con phải ước?"',
    'Nếu buộc phải sống theo những gì người khác mong muốn, thì bạn phải cần đến hơn 7,49 tỷ gương mặt',
    'Buổi tối khi bắt taxi về nhà, tôi rảnh rỗi nên nói chuyện phiếm cùng bác tài, tiện miệng hỏi bác tài cuộc sống là gì. Bác chậm rãi nói rằng :"Trước đây tôi không thích lái xe đâu."',
    'Thế hệ chúng tôi là một thế hệ lạ lùng. Đứa trẻ nào cũng thấy mình cô độc. Đứa trẻ nào cũng thấy mình bất hạnh và thiếu thốn tình yêu hơn người khác. Đứa trẻ nào cũng bất mãn với thứ gia đình ban cho. Đứa trẻ nào cũng loay hoay không biết làm thế nào cho mình đỡ khổ. Đứa trẻ nào cũng tin tưởng vào những người dưng chưa bao giờ thấy mặt hơn là những khuôn mặt thân quen bên cạnh mình.',
    'Cậu hối hạn vì bóc phải một quả quýt chua. Nhưng đối với quả quýt mà nói, đó là tất cả những gì nó có.',
    'Kí ức khác với kỉ niệm, vì những gì chúng ta lưu lại trong kí ức vốn luôn là những điều chúng ta chưa thể hoàn thành hoặc không diễn ra đúng ý, nếu như ta đã hài lòng với một kí ức nào đó, thì kí ức sẽ chuyển hóa thành kỉ niệm, sẽ không còn đau nhói hay thổn thức nữa, nhưng mà có mấy ai được may mắn như thế? Con người cô đơn và trầm mặc chẳng phải vì luôn đau đáu về quá khứ hay sao?',
    'Bắt đầu từ hôm nay, mỗi ngày hãy luôn nở nụ cười trên môi, trên đời này ngoài sinh tử ra mọi sự đều là chuyện nhỏ. Cho dù gặp phải chuyện phiền lòng cũng đừng tự làm khó mình, bất luận hôm nay xảy ra bao nhiêu chuyện đen đủi, đều không nên cảm thấy bi thương. Hôm nay là ngày bạn trẻ nhất trong những ngày tháng sau này, vì còn có ngày mai, hôm nay mãi chỉ là bước khởi đầu của con đường tương lai.',
    'Mất mát và nước mắt là một phần của cuộc đời, bạn không thể tránh khỏi nó được. Chúng ta chỉ có thể mỉm cười lạc quan để mạnh mẽ vượt qua đớn đau. Quá trình bạn trải qua đớn đau chính là quá trình khiến bạn mạnh mẽ hơn. Lạc quan để mạnh mẽ, vui cười để hạnh phúc, đó là bí kíp lớn để tuổi trẻ của chúng ta không trôi qua vô nghĩa. Đừng mãi "mua dây buộc mình" vào những đau khổ, thất bại vì "phiền muộn không giữ qua đêm mới là hạnh phúc".',
    'Đến tầm này rồi, chẳng còn muốn lấy lòng ai nữa. Dù là người yêu hay bạn bè, ai khiến mình thấy thoải mái thì mình ở bên người đó, mệt rồi thì tránh xa người đó. Lấy lòng người khác vĩnh viễn không thể sánh với tự tạo niềm vui cho mình. Thà cô đơn chứ không dối lòng, thà hối tiếc chứ không tạm bợ. Người có thể bước vào trái tim tôi, đối đãi như quân vương, còn không thì tôi chẳng cần nhắc đến.',
    'Bạn không quá thông minh, không dạy sớm bằng người khác, đã ngủ muộn còn ngủ trưa, ngủ trưa lại mãi không chịu dậy, trong lúc ngủ vẫn không ngừng băn khoăn tự nhủ hôm nay hãy chơi cho thật sảng khoái ngày mai mới bắt đầu nỗ lực. Đôi khi điều đáng sợ nhất không phải việc trên đường bạn đi chậm hơn người khác mấy bước, mà là đến trái tim hăng hái muốn đuổi theo cũng không có.',
    'Đừng quên lời người khác nói trong lúc tức giận, bởi những lời nói đó thường là sự thật; đừng ghi hận người đã nói ra những lời ấy, vì thực ra họ đã dùng một cách khác để khiến bạn nhìn rõ chính mình hơn.',
    'Hãy đi gặp người bạn muốn gặp, tranh thủ vầng dương đang rực nắng, gió thoảng nhẹ bay, nhân lúc người ấy còn đó và bạn vẫn chưa già.'
    
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}