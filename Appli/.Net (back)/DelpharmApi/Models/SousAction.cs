using System;
using System.Collections.Generic;

namespace DelpharmApi.Models
{
    public partial class SousAction
    {
        public int Id { get; set; }
        public int? IdAction { get; set; }
        public int? IdSousAction { get; set; }

        public virtual Action? IdActionNavigation { get; set; }
        public virtual Action? IdSousActionNavigation { get; set; }
    }
}
