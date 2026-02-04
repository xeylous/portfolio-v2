'use client';
import React, { useEffect, useState } from 'react';

export default function GitHubStreak() {
  const username = 'xeylous';
  const noteText = 'I believe in Consistency is key';
  const [contributions, setContributions] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  const months = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
  const days = ['Mon', 'Wed', 'Fri'];

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        const data = await response.json();
        
        if (data.contributions) {
          const allContributions = data.contributions;
          setContributions(allContributions);
          setTotalContributions(data.total?.lastYear || allContributions.reduce((sum, day) => sum + day.count, 0));
        }
      } catch (error) {
        console.error('Failed to fetch contributions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  const getContributionLevel = (count) => {
    if (count === 0) return 0;
    if (count <= 3) return 1;
    if (count <= 6) return 2;
    if (count <= 9) return 3;
    return 4;
  };

  const levelColors = [
    '#3d3c3a', // 0 - no contributions (black)
    '#5a5a65', // 1 - low
    '#7a7a85', // 2 - medium
    '#b0b0b8', // 3 - high
    '#e8e8ed', // 4 - very high
  ];

  const renderGrid = () => {
    if (loading || contributions.length === 0) {
      return (
        <div className="flex items-center justify-center h-[120px] text-[#6a6a72]">
          Loading contributions...
        </div>
      );
    }

    // Group contributions by week
    const weeks = [];
    let currentWeek = [];
    
    contributions.forEach((day, index) => {
      const date = new Date(day.date);
      const dayOfWeek = date.getDay();
      
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      
      currentWeek.push(day);
      
      if (index === contributions.length - 1) {
        weeks.push(currentWeek);
      }
    });

    // Take last 52 weeks
    const last52Weeks = weeks.slice(-52);

    return (
      <div className="flex gap-[3px]">
        {last52Weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[3px]">
            {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => {
              const day = week.find(d => new Date(d.date).getDay() === dayIndex);
              const level = day ? getContributionLevel(day.count) : 0;
              
              return (
                <div
                  key={dayIndex}
                  className="w-[11px] h-[11px] rounded-[3px] transition-colors"
                  style={{ backgroundColor: levelColors[level] }}
                  title={day ? `${day.date}: ${day.count} contributions` : ''}
                />
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-[60px] sm:py-[80px] md:py-[50px] lg:py-[100px] w-full flex justify-center bg-[var(--hack-bg)] h-fit" id="github-streak">
      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[1200px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
          <div className="w-full max-w-[900px] pl-1 sm:pl-2">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-[#b7b7c4] opacity-80">
              <span className="tracking-wide text-center sm:text-left">{noteText}</span>
            </div>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[900px] rounded-xl sm:rounded-2xl border border-[#2a2a32] bg-[#151518] shadow-[0_10px_40px_rgba(0,0,0,0.5)] sm:shadow-[0_20px_80px_rgba(0,0,0,0.7)] hover:border-[#3a3a42] transition-colors duration-300"
          >
            <div className="px-3 py-4 sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 lg:py-5">
              {/* Month labels - hidden on very small screens */}
              <div className="hidden sm:flex mb-2 ml-[32px] sm:ml-[36px]">
                <div className="flex w-full justify-between text-[9px] sm:text-[10px] md:text-[11px] text-[#6a6a72]">
                  {months.map((month, i) => (
                    <span key={i} className="w-[40px] sm:w-[45px] md:w-[52px]">{month}</span>
                  ))}
                </div>
              </div>

              <div className="flex">
                {/* Day labels - hidden on mobile */}
                <div className="hidden sm:flex flex-col justify-between text-[9px] sm:text-[10px] md:text-[11px] text-[#6a6a72] mr-2 sm:mr-3 py-[2px]">
                  <span className="h-[9px] sm:h-[10px] md:h-[11px]"></span>
                  <span className="h-[9px] sm:h-[10px] md:h-[11px] flex items-center">{days[0]}</span>
                  <span className="h-[9px] sm:h-[10px] md:h-[11px]"></span>
                  <span className="h-[9px] sm:h-[10px] md:h-[11px] flex items-center">{days[1]}</span>
                  <span className="h-[9px] sm:h-[10px] md:h-[11px]"></span>
                  <span className="h-[9px] sm:h-[10px] md:h-[11px] flex items-center">{days[2]}</span>
                  <span className="h-[9px] sm:h-[10px] md:h-[11px]"></span>
                </div>

                {/* Contribution grid */}
                <div className="overflow-x-auto scrollbar-hide w-full pb-2">
                  {renderGrid()}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-3 sm:mt-4 md:mt-5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-[10px] sm:text-xs text-[#b7b7c4]">
                <span className="font-semibold">{totalContributions} activities in 2025</span>
                <div className="flex items-center gap-1.5 sm:gap-2.5">
                  <span className="opacity-80 text-[9px] sm:text-xs">Less</span>
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    {levelColors.map((color, i) => (
                      <span 
                        key={i}
                        className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-[2px]" 
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="opacity-80 text-[9px] sm:text-xs">More</span>
                </div>
              </div>
            </div>
          </a>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-[#e0e0e0] hover:text-[#858182] transition-colors"
          >
            @{username}
          </a>
        </div>
      </div>
    </section>
  );
}