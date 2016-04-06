#encoding: utf-8
class Comment < Admin::Comment
	validates :mobile_phone, presence: { message: "请输入手机号码" }
	validates :name, presence: { message: "请输入名字" }
	#length
	validates :mobile_phone, length: { is: 11 }
	#format
	validates :mobile_phone, format: { with: /\A1(3|5|8|9)[0-9]{9}\z/, message: "请输入正确的手机号码" }

end
