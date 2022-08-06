namespace backend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; }
        //even when password is same it will produce different password hash because of salt for example when password is same we just change salt and they can not reverse it
        public byte[] PasswordSalt { get; set; }
        public List<Trail>? Trails { get; set; }
    }
}