import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "소개 - WeMake" },
    { name: "description", content: "WeMake에 대해 알아보세요." },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">소개</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              WeMake는 혁신적인 솔루션을 제공하는 회사입니다. 우리는 고객의 성공을 위해 최선을 다합니다.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              우리의 팀은 경험 많은 전문가들로 구성되어 있으며, 최신 기술과 창의적인 아이디어를 결합하여 
              고객에게 최고의 서비스를 제공합니다.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">우리의 미션</h3>
                <p className="text-gray-600">
                  고객의 비즈니스 성장을 돕고, 혁신적인 솔루션을 통해 더 나은 미래를 만들어갑니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">우리의 비전</h3>
                <p className="text-gray-600">
                  기술과 창의성을 결합하여 세상을 더 나은 곳으로 만드는 것이 우리의 비전입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
