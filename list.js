
function fillCategory(){ 
 addOption(document.drop_list.Category, "Business & Finance", "Business & Finance", "");
addOption(document.drop_list.Category, "Legal Services", "Legal Services", "");
addOption(document.drop_list.Category, "Personality Development & Career Coaching", "Personality Development & Career Coaching", "");
addOption(document.drop_list.Category, "Counseling Services", "Counseling Services", "");
addOption(document.drop_list.Category, "Computers & Programming", "Computers & Programming", "");
addOption(document.drop_list.Category, "Healthcare & Medical", "Healthcare & Medical", "");
addOption(document.drop_list.Category, "Beauty, Fashion & Home", "Beauty, Fashion & Home", "");
addOption(document.drop_list.Category, "Spirituality & Astrology", "Spirituality & Astrology", "");
addOption(document.drop_list.Category, "Arts, Creative & Professional Services", "Arts, Creative & Professional Services", "");
}

function SelectSubCat(){

removeAllOptions(document.drop_list.SubCat);
removeAllOptions(document.drop_list.SubCat2);
addOption(document.drop_list.SubCat, "", "SubCategory", "");
addOption(document.drop_list.SubCat2, "", "No Values", "");


if(document.drop_list.Category.value == 'Business & Finance'){
addOption(document.drop_list.SubCat,"Advertising & Marketing", "Advertising & Marketing");
addOption(document.drop_list.SubCat,"Accounting and Finance", "Accounting and Finance");
addOption(document.drop_list.SubCat,"Angels and Private Equity", "Angels and Private Equity");
addOption(document.drop_list.SubCat,"Business planning", "Business planning");
addOption(document.drop_list.SubCat,"Careers & Employment services", "Careers & Employment services");
addOption(document.drop_list.SubCat,"Ecommerce", "Ecommerce");
addOption(document.drop_list.SubCat,"Employment and labor issues", "Employment and labor issues");
addOption(document.drop_list.SubCat,"Entrepreneurs", "Entrepreneurs");
addOption(document.drop_list.SubCat,"Financial Planning", "Financial Planning");
addOption(document.drop_list.SubCat,"Corporations", "Corporations");
addOption(document.drop_list.SubCat,"Credit & Debit", "Credit & Debit");
addOption(document.drop_list.SubCat,"General Management", "General Management");
addOption(document.drop_list.SubCat,"Insurance", "Insurance");
addOption(document.drop_list.SubCat,"International Business and Operations", "International Business and Operations");
addOption(document.drop_list.SubCat,"Mortgage and Loans", "Mortgage and Loans");
addOption(document.drop_list.SubCat,"Stock trading and Investing", "Stock trading and Investing");
addOption(document.drop_list.SubCat,"Personal Finance", "Personal Finance");
addOption(document.drop_list.SubCat,"Renting & Real Estate", "Renting & Real Estate");
addOption(document.drop_list.SubCat,"Small Business", "Small Business");
addOption(document.drop_list.SubCat,"Taxes", "Taxes");
addOption(document.drop_list.SubCat,"Translation services", "Translation services");
addOption(document.drop_list.SubCat,"Transcription services", "Transcription services");
addOption(document.drop_list.SubCat,"Other - Business & Finance", "Other - Business & Finance");
}
if(document.drop_list.Category.value == 'Legal Services'){
addOption(document.drop_list.SubCat,"Corporate law", "Corporate law");
addOption(document.drop_list.SubCat,"Criminal law", "Criminal law");
addOption(document.drop_list.SubCat,"Driving, Accidents and Personal injury", "Driving, Accidents and Personal injury");
addOption(document.drop_list.SubCat,"Family and Divorce laws", "Family and Divorce laws");
addOption(document.drop_list.SubCat,"Immigration law", "Immigration law");
addOption(document.drop_list.SubCat,"Insurance Law", "Insurance Law");
addOption(document.drop_list.SubCat,"Legal research", "Legal research");
addOption(document.drop_list.SubCat,"Paralegal services", "Paralegal services");
addOption(document.drop_list.SubCat,"Tax law", "Tax law");
addOption(document.drop_list.SubCat,"Wills and Trust", "Wills and Trust");
}
if(document.drop_list.Category.value == 'Personality Development & Career Coaching'){
addOption(document.drop_list.SubCat,"Building self-esteem and confidence", "Building self-esteem and confidence");
addOption(document.drop_list.SubCat,"Career counseling", "Career counseling");
addOption(document.drop_list.SubCat,"Interpersonal communication", "Interpersonal communication");
addOption(document.drop_list.SubCat,"Motivation", "Motivation");
addOption(document.drop_list.SubCat,"Personal development", "Personal development");
addOption(document.drop_list.SubCat,"Stress and Anger management", "Stress and Anger management");
addOption(document.drop_list.SubCat,"Time management", "Time management");
addOption(document.drop_list.SubCat,"Work life balance", "Work life balance");
addOption(document.drop_list.SubCat,"others", "others");
}
if(document.drop_list.Category.value == 'Counseling Services'){
addOption(document.drop_list.SubCat,"Crisis management", "Crisis management");
addOption(document.drop_list.SubCat,"Dating issues", "Dating issues");
addOption(document.drop_list.SubCat,"Drug Addiction", "Drug Addiction");
addOption(document.drop_list.SubCat,"Eating disorders", "Eating disorders");
addOption(document.drop_list.SubCat,"Emotional disorders", "Emotional disorders");
addOption(document.drop_list.SubCat,"Parenting", "Parenting");
addOption(document.drop_list.SubCat,"Pastoral and Christian counseling", "Pastoral and Christian counseling");
addOption(document.drop_list.SubCat,"Personal Relationships", "Personal Relationships");
addOption(document.drop_list.SubCat,"Others", "Others");
}
if(document.drop_list.Category.value == 'Computers & Programming'){
addOption(document.drop_list.SubCat,"Application Development", "Application Development");
addOption(document.drop_list.SubCat,"Computer & Video Games", "Computer & Video Games");
addOption(document.drop_list.SubCat,"Computer Repair", "Computer Repair");
addOption(document.drop_list.SubCat,"Internet Crawling services", "Internet Crawling services");
addOption(document.drop_list.SubCat,"Databases", "Databases");
addOption(document.drop_list.SubCat,"Handhelds/PDAs", "Handhelds/PDAs");
addOption(document.drop_list.SubCat,"Hardware", "Hardware");
addOption(document.drop_list.SubCat,"Help For Beginners", "Help For Beginners");
addOption(document.drop_list.SubCat,"Internet Searches", "Internet Searches");
addOption(document.drop_list.SubCat,"Microsoft Excel Help", "Microsoft Excel Help");
addOption(document.drop_list.SubCat,"Middleware", "Middleware");
addOption(document.drop_list.SubCat,"Networking", "Networking");
addOption(document.drop_list.SubCat,"Office Software", "Office Software");
addOption(document.drop_list.SubCat,"Operating System", "Operating System");
addOption(document.drop_list.SubCat,"Windows", "Windows");
addOption(document.drop_list.SubCat,"Linux", "Linux");
addOption(document.drop_list.SubCat,"MAC", "MAC");
addOption(document.drop_list.SubCat,"Ubuntu", "Ubuntu");
addOption(document.drop_list.SubCat,"Other (Computers & Programming)", "Other (Computers & Programming)");
addOption(document.drop_list.SubCat,"Programming", "Programming");
addOption(document.drop_list.SubCat,"Security & Encryption", "Security & Encryption");
addOption(document.drop_list.SubCat,"System Administration", "System Administration");
addOption(document.drop_list.SubCat,"Telecommunication", "Telecommunication");
addOption(document.drop_list.SubCat,"Web Development", "Web Development");
addOption(document.drop_list.SubCat,"Website Partners", "Website Partners");
addOption(document.drop_list.SubCat,"Wireless Technologies", "Wireless Technologies");
}
if(document.drop_list.Category.value == 'Healthcare & Medical'){
addOption(document.drop_list.SubCat,"Services", "Services");
addOption(document.drop_list.SubCat,"Alternate Medicine", "Alternate Medicine");
addOption(document.drop_list.SubCat,"Child & Adolescent Health", "Child & Adolescent Health");
addOption(document.drop_list.SubCat,"Chiropractic Medicine", "Chiropractic Medicine");
addOption(document.drop_list.SubCat,"Cosmetics", "Cosmetics");
addOption(document.drop_list.SubCat,"Diet & Nutrition", "Diet & Nutrition");
addOption(document.drop_list.SubCat,"Disabilities", "Disabilities");
addOption(document.drop_list.SubCat,"Disorders and Conditions", "Disorders and Conditions");
addOption(document.drop_list.SubCat,"Drugs and Medicines", "Drugs and Medicines");
addOption(document.drop_list.SubCat,"Emergency Medicine", "Emergency Medicine");
addOption(document.drop_list.SubCat,"Health for Women", "Health for Women");
addOption(document.drop_list.SubCat,"Health Insurance and Plans", "Health Insurance and Plans");
addOption(document.drop_list.SubCat,"Infertility", "Infertility");
addOption(document.drop_list.SubCat,"Medical Education", "Medical Education");
addOption(document.drop_list.SubCat,"Medical Ethics", "Medical Ethics");
addOption(document.drop_list.SubCat,"Medical Publications", "Medical Publications");
addOption(document.drop_list.SubCat,"Mental & Emotional Health", "Mental & Emotional Health");
addOption(document.drop_list.SubCat,"Non Clinical", "Non Clinical");
addOption(document.drop_list.SubCat,"Nursing", "Nursing");
addOption(document.drop_list.SubCat,"Occupational Therapy", "Occupational Therapy");
addOption(document.drop_list.SubCat,"Parenting", "Parenting");
addOption(document.drop_list.SubCat,"Pain and Pain management", "Pain and Pain management");
addOption(document.drop_list.SubCat,"Personal Fitness", "Personal Fitness");
addOption(document.drop_list.SubCat,"Pharmacology", "Pharmacology");
addOption(document.drop_list.SubCat,"Physical Therapy", "Physical Therapy");
addOption(document.drop_list.SubCat,"Pregnancy & Childbirth", "Pregnancy & Childbirth");
addOption(document.drop_list.SubCat,"Public & Environmental Health", "Public & Environmental Health");
addOption(document.drop_list.SubCat,"Psychological health", "Psychological health");
addOption(document.drop_list.SubCat,"Respiratory Therapy", "Respiratory Therapy");
addOption(document.drop_list.SubCat,"Sexual health and disorders", "Sexual health and disorders");
addOption(document.drop_list.SubCat,"Specialty Medicine", "Specialty Medicine");
addOption(document.drop_list.SubCat,"Speech Therapy", "Speech Therapy");
}
if(document.drop_list.Category.value == 'Beauty, Fashion & Home'){
addOption(document.drop_list.SubCat,"Arts and Antique collection", "Arts and Antique collection");
addOption(document.drop_list.SubCat,"Beauty & Style", "Beauty & Style");
addOption(document.drop_list.SubCat,"Cooking & Food", "Cooking & Food");
addOption(document.drop_list.SubCat,"Electronics & Gadgets", "Electronics & Gadgets");
addOption(document.drop_list.SubCat,"Event and Party management", "Event and Party management");
addOption(document.drop_list.SubCat,"Garden & Landscaping", "Garden & Landscaping");
addOption(document.drop_list.SubCat,"General", "General");
addOption(document.drop_list.SubCat,"Green Living", "Green Living");
addOption(document.drop_list.SubCat,"Homeownership", "Homeownership");
addOption(document.drop_list.SubCat,"Pets", "Pets");
addOption(document.drop_list.SubCat,"Shopping", "Shopping");
addOption(document.drop_list.SubCat,"Others", "Others");
}
if(document.drop_list.Category.value == 'Spirituality & Astrology'){
addOption(document.drop_list.SubCat,"Astrology", "Astrology");
addOption(document.drop_list.SubCat,"Career Forecasts", "Career Forecasts");
addOption(document.drop_list.SubCat,"Dream Analysis", "Dream Analysis");
addOption(document.drop_list.SubCat,"Financial Outlook", "Financial Outlook");
addOption(document.drop_list.SubCat,"Fortune Telling", "Fortune Telling");
addOption(document.drop_list.SubCat,"Graphology", "Graphology");
addOption(document.drop_list.SubCat,"Love & Relationships", "Love & Relationships");
addOption(document.drop_list.SubCat,"New Age Spirituality ", "New Age Spirituality ");
addOption(document.drop_list.SubCat,"Numerology", "Numerology");
addOption(document.drop_list.SubCat,"Occult", "Occult");
addOption(document.drop_list.SubCat,"Palm Reading", "Palm Reading");
addOption(document.drop_list.SubCat,"Paranormal", "Paranormal");
addOption(document.drop_list.SubCat,"Picture Readings", "Picture Readings");
addOption(document.drop_list.SubCat,"Psychic Reading", "Psychic Reading");
addOption(document.drop_list.SubCat,"Orange", "Orange");
addOption(document.drop_list.SubCat,"Religion", "Religion");
addOption(document.drop_list.SubCat,"Tarot Reading", "Tarot Reading");
addOption(document.drop_list.SubCat,"Vedic Astrology", "Vedic Astrology");
}
if(document.drop_list.Category.value == 'Arts, Creative & Professional Services'){
addOption(document.drop_list.SubCat,"Antiques", "Antiques");
addOption(document.drop_list.SubCat,"Crafts", "Crafts");
addOption(document.drop_list.SubCat,"Event Management", "Event Management");
addOption(document.drop_list.SubCat,"Film & Video", "Film & Video");
addOption(document.drop_list.SubCat,"Food & Drink ", "Food & Drink ");
addOption(document.drop_list.SubCat,"Graphic and Desktop Design", "Graphic and Desktop Design");
addOption(document.drop_list.SubCat,"Media Communications", "Media Communications");
addOption(document.drop_list.SubCat,"Music", "Music");
addOption(document.drop_list.SubCat,"Performing Arts ", "Performing Arts ");
addOption(document.drop_list.SubCat,"Photography", "Photography");
addOption(document.drop_list.SubCat,"Technical Writing services", "Technical Writing services");
addOption(document.drop_list.SubCat,"Visual Arts", "Visual Arts");
addOption(document.drop_list.SubCat,"Web Design", "Web Design");
addOption(document.drop_list.SubCat,"Writing Services", "Writing Services");
}

}

function SelectSubCat2(){

removeAllOptions(document.drop_list.SubCat2);
addOption(document.drop_list.SubCat2, "", "SubCategory", "");

if(document.drop_list.SubCat.value == 'Advertising & Marketing'){
addOption(document.drop_list.SubCat2,"Conferences and marketing event management", "Conferences and marketing event management");
addOption(document.drop_list.SubCat2,"Online marketing/SEO/SEM", "Online marketing/SEO/SEM");
addOption(document.drop_list.SubCat2,"Viral Marketing", "Viral Marketing");
addOption(document.drop_list.SubCat2,"Guerilla marketing", "Guerilla marketing");
addOption(document.drop_list.SubCat2,"Guerilla marketing", "Guerilla marketing");
addOption(document.drop_list.SubCat2,"Traditional Marketing", "Traditional Marketing");
addOption(document.drop_list.SubCat2,"Public relations", "Public relations");
}
if(document.drop_list.SubCat.value == 'Application Development'){
addOption(document.drop_list.SubCat2,"Open source", "Open source");
addOption(document.drop_list.SubCat2,".Net", ".Net");
addOption(document.drop_list.SubCat2,"Java", "Java", "");
addOption(document.drop_list.SubCat2,"COBOL", "COBOL");
addOption(document.drop_list.SubCat2,"Tandem", "Tandem");
addOption(document.drop_list.SubCat2,"SAP", "SAP", "");
addOption(document.drop_list.SubCat2,"CRM", "CRM", "");
}
if(document.drop_list.SubCat.value == 'Databases'){
addOption(document.drop_list.SubCat2,"MySQL", "MySQL");
addOption(document.drop_list.SubCat2,"SQL Server", "SQL Server");
addOption(document.drop_list.SubCat2,"Sybase", "Sybase");
addOption(document.drop_list.SubCat2,"Oracle", "Oracle");
}
if(document.drop_list.SubCat.value == 'Programming'){
addOption(document.drop_list.SubCat2,"C, C++", "C, C++");
addOption(document.drop_list.SubCat2,"Java, Python, PHP", "Java, Python, PHP");
addOption(document.drop_list.SubCat2,".Net", ".Net");
}

}


function removeAllOptions(selectbox)
{
	var i;
	for(i=selectbox.options.length-1;i>=0;i--)
	{
		//selectbox.options.remove(i);
		selectbox.remove(i);
	}
}


function addOption(selectbox, value, text )
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;

	selectbox.options.add(optn);
}



function breadcrumbs(){
  
  if(document.drop_list.Category.value)
  {
  var output= document.drop_list.Category.value

   document.getElementById('foo').innerHTML= output
  }
  
  
  
  if(document.drop_list.SubCat.value)
  {
  output+= "  >>  " +document.drop_list.SubCat.value

   document.getElementById('foo').innerHTML= output
  }
  
  if(document.drop_list.SubCat2.value)
  {
  output+= "  >>  " +document.drop_list.SubCat2.value

   document.getElementById('foo').innerHTML= output
  }

}