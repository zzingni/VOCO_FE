import PostCard from "./PostCard";

const PostList = () => {
  const posts = [
    {
      badges: [
        { label: "Interview Tip", style: "bg-secondary-fixed text-on-secondary-fixed" },
        { label: "Naver", style: "bg-surface-container text-outline" }
      ],
      timeAgo: "3 hours ago",
      title: "네이버 프론트엔드 면접에서 가장 많이 물어본 질문 리스트",
      previewText: "최근 네이버 공채 면접을 보면서 정리한 기술 면접 질문 리스트입니다. React 렌더링 최적화와 브라우저 렌더링 엔진에 대한 질문이 꽤 깊게 들어왔어요.",
      authorImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtLlqNy-KQZWUXbJx46z7I_FpVryZbPohKlqZLApu38Z1S9Kav6y0A5BPtN9NPqImK2Ax3jZRLhpLugvhvsN_5x6loIYSDFspzulaDz1n6r0s_ZunOaQxfzJLFk49pdYWpXjZth5-vaM6h-NpYclrffYE3udRNRnkSYP-SAdEC86Ke4_1rBmzyJQWytN5ISW4x4bMyyvw-zdHJorxdnqgrKZsRixRfKfKzn0e5r_vIy5PJiQ-878ic5ap5QW1kK90kCqpGX947ug",
      authorName: "김민수",
      authorRole: "Senior Developer",
      likes: 24,
      comments: 12
    },
    {
      badges: [
        { label: "Success Story", style: "bg-tertiary-fixed text-on-tertiary-fixed" }
      ],
      timeAgo: "6 hours ago",
      title: "비전공자 출신으로 쿠팡 최종 합격한 수기 공유합니다",
      previewText: "작년 이맘때 코딩을 시작해서 드디어 꿈에 그리던 쿠팡에 입사하게 되었습니다. 좌절도 많았지만 Empathetic AI의 모의 면접이 큰 도움이 되었습니다.",
      authorImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLrR1Ctq0Q0Ta0xiybzAhxEKSBO0aAVjjlQW88KmiRNHt7yakKgqt2H-xdUzVBwRwrr9ix1K2oGqXpdUldSAikEEX75wrpv2nUCQC6k5pdT0XtHKXoELBwjSAZr0MgcXTFa7_4lQC9ubjP222WAXXhz2i81U6Trp2oHXZI4zMN7UXl1FKaMaQRQnEXwxjfaheSWM3cYs8Pjk-fM_NVUa0F43qOL0xrKRAXk9FG9ll66WeQKh93VXbrA8EMpJEWJ0_ci_4eQGOT-A",
      authorName: "이지은",
      authorRole: "New Graduate",
      likes: 156,
      comments: 45
    },
    {
      badges: [
        { label: "Interview Tip", style: "bg-secondary-fixed text-on-secondary-fixed" },
        { label: "Data Science", style: "bg-surface-container text-outline" }
      ],
      timeAgo: "1 day ago",
      title: "머신러닝 엔지니어 코딩 테스트 준비 가이드",
      previewText: "일반적인 알고리즘 테스트 외에도 ML 지식을 코드로 풀어내는 문제들이 늘어나고 있습니다. 어떻게 효율적으로 파이썬 라이브러리를 숙달하는지 공유합니다.",
      authorImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb7fqLSHCjny8RG8WJDdi8brwPcBIZwXGofxv9JFO_wmFKIC5kSjfoAMmv1Oufe6H5zLj1TEFsoqETlDmQHJTPGvpFCb4UrGVN6nFCkDRiUBbaNxggVqcKm6WY10Sg_F5LlqQWcbNOe8YVuni3u3zipYLX-gGcVIrMl8kxuZU2o_akcrDKuxAZAWU5gJMHvJ7igs-yUIpQsSB0RXxn_IOrnjDAvto3rsedljg9JDxEa3YZikLmMqUsCqCeqGwTDA2G_8vQlRWM6w",
      authorName: "박준현",
      authorRole: "Data Engineer",
      likes: 38,
      comments: 8
    }
  ];

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
};

export default PostList;
