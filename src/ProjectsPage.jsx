 import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Brain, TrendingUp, Filter, X, ChevronRight, CheckCircle, Activity } from 'lucide-react';

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI-Powered Game Recommendation Engine",
      category: "recommendation",
      status: "production",
      shortDesc: "Content-based recommendation system processing 50K+ games with real-time inference",
      problem: "Gaming platforms struggle to provide personalized recommendations at scale. Users face choice paralysis with vast game libraries, leading to poor discovery and engagement.",
      dataset: {
        name: "Game Metadata Dataset",
        size: "50,000+ games",
        source: "Aggregated game metadata including genres, tags, descriptions, ratings"
      },
      approach: {
        algorithm: "K-Nearest Neighbors (KNN) with Cosine Similarity",
        features: "TF-IDF vectorization on game descriptions, genre embeddings, tag similarity",
        optimization: "Vectorized similarity computation, efficient indexing, caching layer"
      },
      results: {
        accuracy: "92% precision, 0.89 F1-score",
        performance: "<35ms inference latency",
        scale: "1,000+ daily requests handled",
        impact: "Real-time personalized recommendations with high user satisfaction"
      },
      techStack: ["Python", "Scikit-learn", "NumPy", "Pandas", "FastAPI", "Streamlit"],
      deployment: {
        method: "Streamlit Cloud with FastAPI backend",
        url: "https://game.harshgiri.site",
        infrastructure: "RESTful API, caching layer, asynchronous processing"
      },
      github: "https://github.com/giri-harsh",
      demo: "https://game.harshgiri.site",
      highlights: [
        "Sub-35ms latency for real-time recommendations",
        "Scalable architecture handling 1K+ daily requests",
        "92% precision with cosine similarity",
        "Vectorized computation for memory efficiency"
      ]
    },
    {
      id: 2,
      title: "Loan Approval Prediction System",
      category: "predictive",
      status: "production",
      shortDesc: "Explainable loan prediction model with 89.3% accuracy and SHAP interpretability",
      problem: "Financial institutions need transparent, accurate loan approval systems that comply with regulations while minimizing default risk and bias.",
      dataset: {
        name: "Financial Records Dataset",
        size: "10,000+ loan applications",
        source: "Anonymized financial data including income, credit history, employment, demographics"
      },
      approach: {
        algorithm: "Random Forest Classifier with GridSearchCV",
        features: "Income ratios, credit score bins, employment stability, debt ratios, engineered interactions",
        optimization: "SMOTE for class balance, stratified cross-validation, hyperparameter tuning"
      },
      results: {
        accuracy: "89.3% accuracy, 0.87 F1-score",
        performance: "0.93 ROC-AUC score",
        scale: "21% improvement in recall",
        impact: "Reduced false negatives while maintaining precision for regulatory compliance"
      },
      techStack: ["Python", "Scikit-learn", "Pandas", "SHAP", "SMOTE", "Streamlit"],
      deployment: {
        method: "Streamlit interactive application",
        url: "https://loan.harshgiri.site",
        infrastructure: "Real-time prediction API with explainability dashboard"
      },
      github: "https://github.com/giri-harsh",
      demo: "https://loan.harshgiri.site",
      highlights: [
        "SHAP explainability for regulatory compliance",
        "21% recall improvement with SMOTE",
        "0.93 ROC-AUC score",
        "Real-time predictions with confidence intervals"
      ]
    },
    {
      id: 3,
      title: "Multi-Disease Prediction Models",
      category: "predictive",
      status: "research",
      shortDesc: "Healthcare ML models achieving 93.7% accuracy across multiple disease classifications",
      problem: "Early disease detection requires accurate predictive models across multiple conditions. Medical datasets suffer from class imbalance and high dimensionality.",
      dataset: {
        name: "Medical Patient Records",
        size: "45,000+ patient records",
        source: "Anonymized healthcare data across diabetes, heart disease, and liver disease datasets"
      },
      approach: {
        algorithm: "Ensemble approach: Random Forest, SVM, Neural Networks",
        features: "Clinical measurements, lab results, patient demographics, engineered medical ratios",
        optimization: "Feature selection, SMOTE oversampling, stratified K-fold validation"
      },
      results: {
        accuracy: "93.7% accuracy (improved from 82%)",
        performance: "18% reduction in false negatives",
        scale: "Validated across 3 disease types",
        impact: "Potential for early intervention and improved patient outcomes"
      },
      techStack: ["Python", "Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy"],
      deployment: {
        method: "Research project - deployment in progress",
        url: null,
        infrastructure: "Model checkpoints and evaluation frameworks ready for production"
      },
      github: "https://github.com/giri-harsh",
      demo: null,
      highlights: [
        "11.7% accuracy improvement through feature engineering",
        "18% false negative reduction with SMOTE",
        "Ensemble approach validated across multiple diseases",
        "Comprehensive evaluation with medical metrics"
      ]
    },
    {
      id: 4,
      title: "Advanced Data Analytics Portfolio",
      category: "analytics",
      status: "development",
      shortDesc: "25+ analytical programs across finance, healthcare, and retail domains",
      problem: "Organizations need robust data analysis pipelines for exploratory insights, predictive modeling, and business intelligence across diverse domains.",
      dataset: {
        name: "Multi-Domain Datasets",
        size: "Varied datasets across industries",
        source: "Public datasets from finance (stock markets), healthcare (patient outcomes), retail (sales data)"
      },
      approach: {
        algorithm: "Statistical analysis, regression, classification, clustering",
        features: "Domain-specific feature engineering, time-series analysis, dimensionality reduction",
        optimization: "Efficient pandas operations, vectorized computations, visualization pipelines"
      },
      results: {
        accuracy: "Varied by project and domain",
        performance: "25+ analytical programs developed",
        scale: "Cross-domain analytical framework",
        impact: "Reusable analytical modules and visualization templates"
      },
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
      deployment: {
        method: "GitHub repository with Jupyter notebooks",
        url: null,
        infrastructure: "Modular analysis scripts and interactive notebooks"
      },
      github: "https://github.com/giri-harsh/python-programs",
      demo: null,
      highlights: [
        "25+ analytical programs across domains",
        "Interactive dashboards and visualizations",
        "Statistical modeling and hypothesis testing",
        "Reusable data pipelines and modules"
      ]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'production', label: 'Production', count: projects.filter(p => p.status === 'production').length },
    { id: 'recommendation', label: 'Recommendation', count: projects.filter(p => p.category === 'recommendation').length },
    { id: 'predictive', label: 'Predictive', count: projects.filter(p => p.category === 'predictive').length },
    { id: 'analytics', label: 'Analytics', count: projects.filter(p => p.category === 'analytics').length }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter || p.status === selectedFilter);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 backdrop-blur-sm bg-slate-900/95">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Project Portfolio</h1>
              <p className="text-slate-400 text-sm">End-to-end ML systems from research to production</p>
            </div>
            <a 
              href="https://harshgiri.site"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2"
            >
              Back to Portfolio
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="bg-slate-900/50 border-b border-slate-800 sticky top-[73px] z-30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3 overflow-x-auto">
            <Filter size={20} className="text-slate-400 flex-shrink-0" />
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  selectedFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {filter.label}
                <span className="ml-2 text-xs opacity-70">({filter.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h2>
                    {project.status === 'production' && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                        <Activity size={12} />
                        PRODUCTION
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-4">{project.shortDesc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Details
                    <ChevronRight size={16} />
                  </button>
                  
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full border border-slate-700 max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex justify-between items-start z-10">
              <div>
                <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                <div className="flex gap-2">
                  {selectedProject.status === 'production' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                      <Activity size={14} />
                      PRODUCTION
                    </span>
                  )}
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full capitalize">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Problem Statement */}
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Brain className="text-blue-400" size={24} />
                  Problem Statement
                </h3>
                <p className="text-slate-300 leading-relaxed">{selectedProject.problem}</p>
              </div>

              {/* Dataset */}
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Database className="text-blue-400" size={24} />
                  Dataset
                </h3>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <p className="text-slate-300 mb-2"><span className="font-semibold">Name:</span> {selectedProject.dataset.name}</p>
                  <p className="text-slate-300 mb-2"><span className="font-semibold">Size:</span> {selectedProject.dataset.size}</p>
                  <p className="text-slate-300"><span className="font-semibold">Source:</span> {selectedProject.dataset.source}</p>
                </div>
              </div>

              {/* Approach */}
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Code className="text-blue-400" size={24} />
                  Technical Approach
                </h3>
                <div className="space-y-3">
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="font-semibold text-blue-400 mb-1">Algorithm</p>
                    <p className="text-slate-300">{selectedProject.approach.algorithm}</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="font-semibold text-blue-400 mb-1">Features</p>
                    <p className="text-slate-300">{selectedProject.approach.features}</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="font-semibold text-blue-400 mb-1">Optimization</p>
                    <p className="text-slate-300">{selectedProject.approach.optimization}</p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <TrendingUp className="text-blue-400" size={24} />
                  Results & Impact
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="font-semibold text-blue-400 mb-1">Accuracy</p>
                    <p className="text-slate-300">{selectedProject.results.accuracy}</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="font-semibold text-blue-400 mb-1">Performance</p>
                    <p className="text-slate-300">{selectedProject.results.performance}</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="font-semibold text-blue-400 mb-1">Scale</p>
                    <p className="text-slate-300">{selectedProject.results.scale}</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="font-semibold text-blue-400 mb-1">Impact</p>
                    <p className="text-slate-300">{selectedProject.results.impact}</p>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-bold mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deployment */}
              <div>
                <h3 className="text-xl font-bold mb-3">Deployment</h3>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <p className="text-slate-300 mb-2"><span className="font-semibold">Method:</span> {selectedProject.deployment.method}</p>
                  {selectedProject.deployment.url && (
                    <p className="text-slate-300 mb-2">
                      <span className="font-semibold">URL:</span>{' '}
                      <a href={selectedProject.deployment.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        {selectedProject.deployment.url}
                      </a>
                    </p>
                  )}
                  <p className="text-slate-300"><span className="font-semibold">Infrastructure:</span> {selectedProject.deployment.infrastructure}</p>
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h3 className="text-xl font-bold mb-3">Key Highlights</h3>
                <div className="space-y-2">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium transition-colors"
                  >
                    <Github size={20} />
                    View on GitHub
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-colors"
                  >
                    <ExternalLink size={20} />
                    Launch Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;