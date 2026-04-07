import JobCard from "./JobCard";

const JobList = () => {
  const jobsData = [
    {
      companyImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAycM0Q5dgkWV7Zf67o_-xW6WVYo7nEo-kBD91OJsB7MoO6WkGKzlkS8LYHhAaqGU6pspTCvUFapZXNJaCr6TGUtr04zq3hAnGg-QotD3YQfP9E-XWdubhyoURQF2eD5WPEiyjGVahWJlgE9-zuZk9xw2YA9-X1kYwv-QEe_GmRDWuXKiAuE1MQH8XpiMKlll9sstdqJ2olYM8gcgGb4KbSIwCseaCHOTCOMtB6C9ZfgQT5R7WwZC7zDSKSGKQgq_fIWR0X6jqEYg",
      companyName: "NexTech Systems",
      jobTitle: "시니어 백엔드 엔지니어 (Java/Kotlin)",
      location: "서울 강남구",
      salary: "7,000 - 9,500",
      skills: ["Java", "Spring"],
      badgeType: "New"
    },
    {
      companyImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBj0GBFBeagBhxMp2u1JLiy_MKexy-LoVeT2yE7J9vDs8rJ6kB9sL1C3Nl-XOXjhZOPPTx4dLtKngGHgefe_nlJtJHVHFOFfBqV5t278flg8yM1iiEa9xU6YHyoWGH0g2jeaQG_VVsljPm7XhNEGJl9NlR1NF3Aq7k-7QVYSM4oEcWefvgYexP98reW0qIzNI36bIBxSCnXmQmHIMJxtSJoduAOjZvEtdaLGKr1zvyPDybWba4rev0YkoNMArEnWVicL-9Nq1HnA",
      companyName: "Mintly Finance",
      jobTitle: "UI/UX 프로덕트 디자이너",
      location: "서울 성동구",
      salary: "5,500 - 7,500",
      skills: ["Figma", "Design System"],
      badgeType: null
    },
    {
      companyImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu_ddu9BYxSZgMMY7WtYUGCfmXLYcfkysGVHVyzh5Qdr-E92vVdpeHIwE0duBEXPLIb3cIwiIF_QJNOgK9xSIUDoQGh1El8OfPDCWX09TnSzrm7IQR3QBMTQhPAlFyyEgQSFc7bzCwEEkqwEkArvHx41zdrWTLqHEcmHwRsxQ_AP2A4uCh6x7NWq_zK1R0etpuAPB1is9iUDHQWQQ91_salu_z3THHCiSpTkF5EEeA3JWGIqEq83pB9FRmT2VCjwEptayX-TcIDg",
      companyName: "A-Lab AI",
      jobTitle: "머신러닝 엔지니어 (NLP)",
      location: "원격 근무 가능",
      salary: "8,000 - 12,000",
      skills: ["PyTorch", "LLM"],
      badgeType: "Urgent"
    },
    {
      companyImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1G3v_bPIKHkv6LumxgOnBXR6xddnGCOpIFdad31ksJnutWF69MQ-4r5VBi6dFJ1H5HxrBEkNbEgmNp22ZaE1wruM3_cRGwCs2G7mTJzBgEYNi_TeqlY1IJ1voyTqPhsQ7QofNclbSl79oeCHyQFlplUOLr27Wq_RtOR2AiU7NQ6BKvhmcjN5AoqD67KPOTspfzROt1peZ_ysQqkBQgu8L2xrBoGHAr4EOQ4xEMoZxVXufHwqW2fAuxErIYHkWiXRTKLdNUogIlw",
      companyName: "CloudSphere",
      jobTitle: "DevOps 엔지니어",
      location: "판교 테크노밸리",
      salary: "6,500 - 9,000",
      skills: ["AWS", "Kubernetes"],
      badgeType: null
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobsData.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
      
      {/* Load More Button */}
      <div className="col-span-1 md:col-span-2 mt-16 flex justify-center">
        <button className="px-12 py-4 border-2 border-slate-200 rounded-full text-slate-600 font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
          더 많은 공고 보기 <span className="material-symbols-outlined">expand_more</span>
        </button>
      </div>
    </div>
  );
};

export default JobList;
