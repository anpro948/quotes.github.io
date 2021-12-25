var quotes = [
    'Thất bại thật sự không phải là kết quả không được như ý muốn mà là khi ta đang nắm giữ trong tay nhưng không biết trân trọng mà lại tùy tiện và dễ dàng từ bỏ khi chưa nếm trải qua hay quyết tâm giữ lấy.',
    'Kim đồng hồ có thể quay lại chỗ cũ, nhưng không còn ngày hôm qua nữa rồi...',
    'Một đứa trẻ hỏi Thượng đế: "Nếu mọi thứ đều đã được viết vào số mệnh, vậy tại sao con phải ước?"',
    'Nếu buộc phải sống theo những gì người khác mong muốn, thì bạn phải cần đến hơn 7,49 tỷ gương mặt',
    'Buổi tối khi bắt taxi về nhà, tôi rảnh rỗi nên nói chuyện phiếm cùng bác tài, tiện miệng hỏi bác tài cuộc sống là gì. Bác chậm rãi nói rằng :"Trước đây tôi không thích lái xe đâu."',
    'Thế hệ chúng tôi là một thế hệ lạ lùng. Đứa trẻ nào cũng thấy mình cô độc. Đứa trẻ nào cũng thấy mình bất hạnh và thiếu thốn tình yêu hơn người khác. Đứa trẻ nào cũng bất mãn với thứ gia đình ban cho. Đứa trẻ nào cũng loay hoay không biết làm thế nào cho mình đỡ khổ. Đứa trẻ nào cũng tin tưởng vào những người dưng chưa bao giờ thấy mặt hơn là những khuôn mặt thân quen bên cạnh mình.',
    'Cậu hối hạn vì bóc phải một quả quýt chua. Nhưng đối với quả quýt mà nói, đó là tất cả những gì nó có.',
    'Kí ức khác với kỉ niệm, vì những gì chúng ta lưu lại trong kí ức vốn luôn là những điều chúng ta chưa thể hoàn thành hoặc không diễn ra đúng ý, nếu như ta đã hài lòng với một kí ức nào đó, thì kí ức sẽ chuyển hóa thành kỉ niệm, sẽ không còn đau nhói hay thổn thức nữa, nhưng mà có mấy ai được may mắn như thế? Con người cô đơn và trầm mặc chẳng phải vì luôn đau đáu về quá khứ hay sao?'
    
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}