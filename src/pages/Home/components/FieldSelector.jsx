import { useState, useMemo } from 'react';

const FieldSelector = ({ fields, selectedFieldId, onSelectField }) => {
  if (!fields || fields.length === 0) return null;

  // main_category를 기준으로 데이터를 그룹화합니다.
  const groupedFields = useMemo(() => {
    return fields.reduce((acc, field) => {
      if (!acc[field.main_category]) {
        acc[field.main_category] = [];
      }
      acc[field.main_category].push(field);
      return acc;
    }, {});
  }, [fields]);

  // 처음엔 선택된 field가 속한 메인 카테고리를 열어두거나, 아무것도 선택되지 않았다면 첫 번째 카테고리를 엽니다.
  const [expandedCategory, setExpandedCategory] = useState(() => {
    if (selectedFieldId) {
      const field = fields.find(f => f.id === selectedFieldId);
      if (field) return field.main_category;
    }
    return Object.keys(groupedFields)[0];
  });

  return (
    <div className="w-full mb-6">
      <div className="flex items-center gap-2 mb-4 px-2">
        <span className="material-symbols-outlined text-primary" data-icon="category">category</span>
        <h3 className="text-on-surface font-bold font-headline text-lg">면접 분야 선택</h3>
      </div>
      <p className="text-sm text-on-surface-variant mb-6 px-2">자신이 지원하고자 하는 직무 분야를 선택해주세요. 해당 분야에 맞춤화된 질문이 출제됩니다.</p>

      <div className="flex flex-col gap-3 w-full text-left">
        {Object.entries(groupedFields).map(([mainCategory, subFields]) => {
          const isExpanded = expandedCategory === mainCategory;

          return (
            <div key={mainCategory} className="flex flex-col border border-slate-100 rounded-lg overflow-hidden bg-surface-container-lowest shadow-sm transition-all duration-300">

              {/* Main Category Accordion Header */}
              <button
                onClick={() => setExpandedCategory(isExpanded ? null : mainCategory)}
                className="flex items-center justify-between w-full px-5 py-4 bg-white hover:bg-slate-50 transition-colors"
              >
                <span className={`font-bold ${isExpanded ? 'text-primary' : 'text-slate-800'}`}>{mainCategory}</span>
                <span
                  className={`material-symbols-outlined transition-transform duration-300 ${isExpanded ? 'text-primary rotate-180' : 'text-slate-400 rotate-0'}`}
                >
                  expand_more
                </span>
              </button>

              {/* Sub Categories List */}
              <div
                className={`flex flex-col bg-slate-50 transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                {subFields.map(field => {
                  const isSelected = selectedFieldId === field.id;
                  return (
                    <button
                      key={field.id}
                      onClick={() => onSelectField(field.id)}
                      className={`px-5 py-3 text-sm font-medium transition-all text-left flex items-center justify-between border-l-4 ${isSelected
                          ? 'border-primary bg-blue-50/50 text-primary font-bold'
                          : 'border-transparent text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                        }`}
                    >
                      <span className={isSelected ? 'translate-x-1 transition-transform' : ''}>
                        {field.sub_category}
                      </span>
                      {isSelected && <span className="material-symbols-outlined text-sm">check</span>}
                    </button>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FieldSelector;
