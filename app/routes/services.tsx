import type { Route } from "./+types/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "서비스 - WeMake" },
    { name: "description", content: "WeMake의 다양한 서비스를 확인해보세요." },
  ];
}

export default function Services() {
  const services = [
    {
      title: "웹 개발",
      description: "현대적이고 반응형 웹사이트를 구축합니다.",
      icon: "🌐"
    },
    {
      title: "모바일 앱",
      description: "iOS와 Android용 네이티브 앱을 개발합니다.",
      icon: "📱"
    },
    {
      title: "UI/UX 디자인",
      description: "사용자 친화적인 인터페이스를 디자인합니다.",
      icon: "🎨"
    },
    {
      title: "클라우드 솔루션",
      description: "확장 가능한 클라우드 인프라를 구축합니다.",
      icon: "☁️"
    },
    {
      title: "데이터 분석",
      description: "비즈니스 인사이트를 위한 데이터 분석을 제공합니다.",
      icon: "📊"
    },
    {
      title: "컨설팅",
      description: "기술 전략과 디지털 변환을 지원합니다.",
      icon: "💡"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">서비스</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            우리는 다양한 기술 분야에서 전문적인 서비스를 제공합니다.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
