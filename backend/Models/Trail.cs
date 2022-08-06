namespace backend.Models
{
    public class Trail
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public User? User { get; set; }
    }
}