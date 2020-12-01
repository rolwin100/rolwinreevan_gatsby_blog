---
title: Highlights from Spark+AI Summit 2020 for Data engineers
tags: [ spark, dataengineer, bigdata ]
date: 2020-07-23T05:25:44.226Z
path: blog/spark-summit-2020
cover: ./cover.jpeg
excerpt: Let's talk about spark summit 2020  
---

# Highlights from Spark+AI Summit 2020 for Data engineers

Copyright Databricks

Originally called “Spark Summit” and now drifting to AI (to follow the hype of course), the summit, organized by [Databricks](undefined)(founder of Spark, Delta, MLflow) brings together all top tech companies with mature experience in **data science and data engineering **with more than **200 sessions. **So even if you are not a spark-fan boy (no, I won't talk about spark 3.0), there’s a lot to learn from this event. Bonus this year: the event was online and free and as usual, all talks+slides are available [here](https://databricks.com/sparkaisummit/north-america-2020/agenda).

In these takeaways focusing on the **data engineering topics**, I'll provide as resources, the **most interesting talks** I've seen for each highlight and some **extra bonus links**. Each highlight could be a dedicated article on its own, the idea here is to regroup a *curated list* for anyone that would like to be up to date with the latest data engineer news in 2020.

### Spark on Kubernetes(K8s) is getting better and the data engineer world is welcoming it with open arms

Kubernetes makes peace with infrastructure for big data and the rest. It's cumbersome to build knowledge around Yarn/Mesos cluster if it's only for specific big data applications like spark jobs. As K8s is a general-purpose orchestration framework, every spark job is *just* another application living in the cluster.

With the [spark on k8s operator from google](https://github.com/GoogleCloudPlatform/spark-on-k8s-operator), each spark job can be seen as a K8s Object that you can describe/delete/restart as it would be any other application running on your cluster.

Talks :

* [**Running Apache Spark on Kubernetes: Best Practices and Pitfalls](https://databricks.com/session_na20/running-apache-spark-on-kubernetes-best-practices-and-pitfalls)**

* [**Running Apache Spark Jobs Using Kubernetes](https://databricks.com/session_na20/running-apache-spark-jobs-using-kubernetes)**

* [**Simplify and Boost Spark 3 Deployments with Hypervisor-Native Kubernetes](https://databricks.com/session_na20/simplify-and-boost-spark-3-deployments-with-hypervisor-native-kubernetes)**

### Data catalog/lineage/governance: always and forever

It seems that almost all top tech companies are building their own data catalog/lineage/governance tool.

It's a bit funny because this problem exists for years but for a weird reason, more people tend to realize that it is starting to be a must-have.

The exponential growth of data over the past years, the need for *fresh* data, and the *beloved *GDPR are probably the drivers for this.

I was a bit disappointed however by the talks around the topic this year because it seems that most of the products presented were commercial. That being said, there are plenty of opensource initiatives (see extra links).

Talks :

* [**Case Study and Automation Strategies to Protect Sensitive Data](https://databricks.com/session_na20/case-study-and-automation-strategies-to-protect-sensitive-data) (Immuta)**

* [**Find and Protect Your Crown Jewels in Databricks with Privacera and Apache Ranger](https://databricks.com/session_na20/find-and-protect-your-crown-jewels-in-databricks-with-privacera-and-apache-ranger) (Privacera)**

Extra :

* [https://github.com/lyft/amundsen](https://github.com/lyft/amundsen) (Lyft)

* [https://github.com/linkedin/datahub](https://github.com/linkedin/datahub) (Linkedin)

* [https://github.com/Netflix/metacat](https://github.com/Netflix/metacat) (Netflix)

### **Data engineer needs to democratize data pipelines**

Data engineers also need to build tools/frameworks to be able to scale productivity on data pipelines and enable other friends (Data Science, Data analysts, Software Engineers) to write production-ready ETLs.

Some of the talks make a nice distinction between job code (=boilerplate to run your job) and business code (the business data transformation logic). When doing data pipeline at scale, in production, there’s a lot of boilerplate needed (job code) compared to the actual business code that produces valuable data.

There are different ways to achieve this :

* Force SQL to be the unique 'Business code' and build DSL(Domain Specific Language)/boilerplate that run that SQL code.

* Create a DSL where common functions/pipelines can be reused without having to (re)code them

* Create/Reuse a shared library with boilerplate generation

* …

Talks :

* [**Sputnik: Airbnb’s Apache Spark Framework for Data Engineering — Databricks](https://databricks.com/session_na20/sputnik-airbnbs-apache-spark-framework-for-data-engineering)**

* [**Composable Data Processing with Apache Spark](https://databricks.com/session_na20/composable-data-processing-with-apache-spark)**

* [**Designing the Next Generation of Data Pipelines at Zillow with Apache Spark](https://databricks.com/session_na20/designing-the-next-generation-of-data-pipelines-at-zillow-with-apache-spark)**

* [**Fugue: Unifying Spark and Non-Spark Ecosystems for Big Data Analytics](https://databricks.com/session_na20/fugue-unifying-spark-and-non-spark-ecosystems-for-big-data-analytics)**

### **Big data format for ACID transactions: Delta lake seems to take the lead among his peer's Apache Iceberg, Apache Hudi**

Again this year, there was a talk that compares Delta/Iceberg/Hudi which are all *new* data formats that have been created to solve common issues (handling jobs failing mid-way, modification of existing data difficult, etc.) we have with the classic big data format (parquet, avro,…). As Delta is developed by [Databricks](undefined), there was of course more information about that last one.

Talks :

* [**A Thorough Comparison of Delta Lake, Iceberg and Hudi](https://databricks.com/session_na20/a-thorough-comparison-of-delta-lake-iceberg-and-hudi)**

Extra :

* [**ACID ORC, Iceberg, and Delta Lake — An Overview of Table Formats for Large Scale Storage and Analytic](https://databricks.com/session_eu19/acid-orc-iceberg-and-delta-lake-an-overview-of-table-formats-for-large-scale-storage-and-analytics)s [Spark Summit 2019]**

### Apache Arrow is getting to the next level

Because Arrow is a bit the shadow protocol behind certain tools that data engineer use as 'end-user', it may be confusing to understand how does arrow help/fits in the big data landscape.

One thing is sure: it's getting more traction and one use case I wish to see is the replacement of the antic JDBC protocol but for that, we need the DB to do their part of the integration.

Talk :

* [**Data Microservices in Apache Spark using Apache Arrow Flight](https://databricks.com/session_na20/data-microservices-in-apache-spark-using-apache-arrow-flight)**

Extra :

* [https://towardsdatascience.com/apache-arrow-read-dataframe-with-zero-memory-69634092b1a](https://towardsdatascience.com/apache-arrow-read-dataframe-with-zero-memory-69634092b1a) (Understand basics of Arrow)

### Data quality at scale

In the same idea (and probably the same drivers) than data lineage/catalog/governance, data quality got its own big piece of the cake. [Great expectations](https://github.com/great-expectations/great_expectations) is a really nice framework for data quality and comes with a bunch of integrations (pandas, spark, BigQuery, Redshift). There was a dedicated talk about it, so check it out!

Talk :

[**Automated Testing For Protecting Data Pipelines from Undocumented Assumptions](https://databricks.com/session_na20/automated-testing-for-protecting-data-pipelines-from-undocumented-assumptions)**

Extra :

* [https://github.com/awslabs/deequ](https://github.com/awslabs/deequ) (Spark Scala — from AWS)

* [https://github.com/ronald-smith-angel/owl-data-sanitizer](https://github.com/ronald-smith-angel/owl-data-sanitizer) (Pyspark)

### Python with Spark eco-system has some good future

Even if there's no doubt that Scala has better performance for Spark (and easier to package), because of the mass adoption of Python in the data ecosystem, it makes sense to invest more into it (and to democratize data pipelines!).

Databricks has announced a couple of things during their keynote that shows they want to go into that direction and improve the usability of the spark python API with their "project Zen".

Talk:

* [Spark + AI Summit 2020: Wednesday Morning Keynotes](https://databricks.com/session_na20/wednesday-morning-keynotes) (see starting 15:50)

Extra :

* [https://databricks.com/blog/2020/05/20/new-pandas-udfs-and-python-type-hints-in-the-upcoming-release-of-apache-spark-3-0.html](https://databricks.com/blog/2020/05/20/new-pandas-udfs-and-python-type-hints-in-the-upcoming-release-of-apache-spark-3-0.html)

Are these points resonating with your thoughts? Feel free to share yours!
