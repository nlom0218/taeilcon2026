const featureSections = [
  {
    title: '정확한 컬러와 내구성을 위한',
    headline: '도장공사',
    description:
      '공간의 용도와 표면 특성을 분석해 최적의 도료와 공법을 적용하고, 깔끔한 마감 품질을 제공합니다.',
  },
  {
    title: '오랜 수명을 만드는',
    headline: '방수공사',
    description:
      '누수 취약 구간을 사전 진단하고 현장에 맞는 방수 시스템을 적용해 장기적인 유지 성능을 확보합니다.',
  },
  {
    title: '기초부터 마감까지 책임지는',
    headline: '습식공사',
    description:
      '공정 간 간섭을 줄이는 체계적인 관리로 균일한 품질의 습식 시공을 안정적으로 수행합니다.',
  },
];

const aboutItems = [
  {
    label: '대표',
    kor: '이규태',
    eng: 'CEO Lee Gyutae',
  },
  {
    label: '이사',
    kor: '장규일',
    eng: 'Director Jang Gyuil',
  },
  {
    label: '대표 번호',
    kor: '010-3549-7281',
  },
  {
    label: '이사 번호',
    kor: '010-2858-1465',
  },
  {
    label: '주소',
    kor: '24372 강원특별자치도 춘천시 공지로 301(효자동)',
  },
  {
    label: '사업자번호',
    kor: '469-81-01029',
  },
];

const achievements = ['도장공사', '방수공사', '습식공사'];

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="aspect-[16/10] w-full rounded-2xl border border-dashed border-[#93C5FD] bg-[#EFF6FF] p-5">
      {/* TODO: 실제 이미지 교체 */}
      <div className="flex h-full items-center justify-center rounded-xl bg-[#DBEAFE] text-center text-sm font-semibold text-[#1E40AF] md:text-base">
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-[#0F172A]/35 text-[#E2E8F0] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-5 py-4 md:px-8">
          <p className="text-lg font-bold tracking-wide">태일건설</p>
        </div>
      </header>

      <main>
        <section className="relative min-h-screen overflow-hidden">
          {/* TODO: 실제 Hero 전체 배경 이미지 적용 */}
          {/* 예시 레퍼런스: /Users/hd/.cursor/projects/Users-hd-Documents-taeilcon2026/assets/___________2026-04-05______12.28.24-b7fe7ec8-6273-45f4-99a1-d83f76722209.png */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0B1120]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.22),transparent_42%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/25" />

          <div className="relative mx-auto flex min-h-screen w-full max-w-[1240px] items-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
            <div className="max-w-[720px]">
              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                내가 그리는대로!
                <br />
                삶이 됩니다.
              </h1>
              <p className="mt-5 max-w-[560px] text-base text-[#E2E8F0] md:text-lg">
                당신이 꿈꾸는 공간을 태일건설의 전문 시공으로 완성합니다.
                <br className="hidden md:block" />
                도장공사, 방수공사, 습식공사를 정확하고 꼼꼼하게 제공합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#DBEAFE] bg-white">
          <div className="mx-auto w-full max-w-[1240px] px-5 py-16 text-center md:px-8 md:py-24">
            <p className="text-3xl font-bold leading-snug text-[#334155] md:text-5xl">
              좋은 도장은 공간의 완성도를 바꿉니다.
            </p>
            <p className="mt-3 text-3xl font-bold leading-snug text-[#1E40AF] md:mt-5 md:text-5xl">
              태일건설은 현장 경험을 바탕으로 정확하게 시공합니다.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <div className="space-y-16 md:space-y-24">
            {featureSections.map((section, index) => {
              const reverse = index % 2 === 1;
              return (
                <article
                  key={section.headline}
                  className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                    reverse ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div>
                    <ImagePlaceholder label={`시공분야 이미지 ${index + 1}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-[#334155] md:text-3xl">
                      {section.title}
                    </h2>
                    <p className="mt-2 text-3xl font-bold text-[#1E40AF] md:text-4xl">
                      {section.headline}
                    </p>
                    <p className="mt-6 text-base leading-7 text-[#334155] md:text-lg">
                      {section.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-[#EFF6FF]">
          <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
            {/* TODO: 슬로건 배경 이미지 */}
            <ImagePlaceholder label="슬로건 배경 이미지 영역" />
            <div className="mt-10 grid gap-6 md:grid-cols-[1fr_2fr]">
              <p className="text-3xl font-bold leading-tight text-[#1E40AF] md:text-5xl">
                정직하게 칠하고.
                <br />
                꼼꼼하게 막고.
                <br />
                끝까지 책임집니다.
              </p>
              <p className="self-end text-base leading-7 text-[#334155] md:text-lg">
                태일건설은 도장공사, 방수공사, 습식공사를 중심으로 현장별 맞춤
                솔루션을 제공합니다.
                <br className="hidden md:block" />
                공정마다 기본을 지키고, 결과로 신뢰를
                만들겠습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <h2 className="text-center text-3xl font-bold text-[#1E40AF] md:text-5xl">
            About TAEIL
          </h2>

          <div className="mt-10 grid items-start gap-10 md:mt-14 md:grid-cols-2">
            <div>
              {/* TODO: 회사 전경 이미지 */}
              <ImagePlaceholder label="회사 전경 이미지 영역" />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-2xl font-bold md:text-3xl">태일건설</p>
                <p className="mt-2 text-base text-[#334155] md:text-lg">
                  TAEIL Construction
                </p>
              </div>

              <div className="space-y-6">
                {aboutItems.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-[#DBEAFE] pb-4"
                  >
                    <p className="text-lg font-semibold">{item.label}</p>
                    <p className="mt-2 text-sm text-[#334155] md:text-base">
                      {item.kor}
                    </p>
                    {item.eng ? (
                      <p className="mt-1 text-sm text-[#64748B] md:text-base">
                        {item.eng}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>

              <div>
                <p className="text-lg font-semibold">주요 시공 분야</p>
                <ul className="mt-3 space-y-2 text-sm text-[#334155] md:text-base">
                  {achievements.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0F172A] text-[#CBD5E1]">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-14 md:px-8 md:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-2xl font-bold text-white">태일건설</p>
              <p className="mt-4 text-sm leading-6 md:text-base">
                대표번호 010-3549-7281
                <br />
                이사번호 010-2858-1465
                <br />
                24372 강원특별자치도 춘천시 공지로 301(효자동)
              </p>
            </div>
            <div className="grid gap-3 text-sm md:text-right md:text-base">
              <p>도장공사 · 방수공사 · 습식공사</p>
              <p>사업자번호 469-81-01029</p>
              <p className="text-[#94A3B8]">
                © TAEIL Construction. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
