var _ = require('lodash');

var people = [{"id":1,"first_name":"Billy","last_name":"Woods","email":"bwoods0@wikipedia.org","gender":"Male","ip_address":"96.107.238.10"},
{"id":2,"first_name":"Wayne","last_name":"Ward","email":"wward1@trellian.com","gender":"Male","ip_address":"181.209.245.25"},
{"id":3,"first_name":"Martin","last_name":"James","email":"mjames2@biglobe.ne.jp","gender":"Male","ip_address":"84.197.232.79"},
{"id":4,"first_name":"Lillian","last_name":"Martin","email":"lmartin3@pagesperso-orange.fr","gender":"Female","ip_address":"33.202.85.191"},
{"id":5,"first_name":"Stephen","last_name":"Mccoy","email":"smccoy4@g.co","gender":"Male","ip_address":"113.154.22.227"},
{"id":6,"first_name":"Sarah","last_name":"Wagner","email":"swagner5@nsw.gov.au","gender":"Female","ip_address":"73.214.178.247"},
{"id":7,"first_name":"Juan","last_name":"Franklin","email":"jfranklin6@gravatar.com","gender":"Male","ip_address":"4.69.157.40"},
{"id":8,"first_name":"Diane","last_name":"Lane","email":"dlane7@sfgate.com","gender":"Female","ip_address":"163.111.103.70"},
{"id":9,"first_name":"Sandra","last_name":"Sanders","email":"ssanders8@usa.gov","gender":"Female","ip_address":"106.111.101.178"},
{"id":10,"first_name":"Timothy","last_name":"Larson","email":"tlarson9@cloudflare.com","gender":"Male","ip_address":"206.211.214.109"},
{"id":11,"first_name":"Lisa","last_name":"Henderson","email":"lhendersona@zdnet.com","gender":"Female","ip_address":"214.249.117.219"},
{"id":12,"first_name":"Judy","last_name":"Gonzalez","email":"jgonzalezb@dailymail.co.uk","gender":"Female","ip_address":"139.211.251.193"},
{"id":13,"first_name":"Walter","last_name":"Sims","email":"wsimsc@springer.com","gender":"Male","ip_address":"190.186.245.13"},
{"id":14,"first_name":"Albert","last_name":"Diaz","email":"adiazd@skyrock.com","gender":"Male","ip_address":"59.248.31.2"},
{"id":15,"first_name":"Jessica","last_name":"Banks","email":"jbankse@amazon.co.uk","gender":"Female","ip_address":"126.121.154.243"},
{"id":16,"first_name":"Albert","last_name":"Bennett","email":"abennettf@themeforest.net","gender":"Male","ip_address":"58.73.125.235"},
{"id":17,"first_name":"Wayne","last_name":"Kennedy","email":"wkennedyg@ihg.com","gender":"Male","ip_address":"1.205.107.27"},
{"id":18,"first_name":"Melissa","last_name":"Johnson","email":"mjohnsonh@cloudflare.com","gender":"Female","ip_address":"62.151.45.49"},
{"id":19,"first_name":"Sara","last_name":"Burns","email":"sburnsi@yelp.com","gender":"Female","ip_address":"113.91.126.252"},
{"id":20,"first_name":"Ashley","last_name":"Hill","email":"ahillj@soundcloud.com","gender":"Female","ip_address":"246.136.242.121"}]

var femaleCount = _.filter(people,{gender:'Female'}).length;
alert(femaleCount + " Females");
