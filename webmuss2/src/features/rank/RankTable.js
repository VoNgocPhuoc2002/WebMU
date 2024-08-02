import React, { useState } from 'react';
import './styles.scss';
import Pagination from '../../components/pagination/Pagination';
const data = [
  { rank: 1, world: 'Fresei', class: 'Dragon Knight', character: 'sony2222', exp: '2,461,319,547,157', level: 400, masterLevel: 1053 },
  { rank: 2, world: 'Alfheim', class: 'Luminous Wizard', character: 'QBruceLeeQ', exp: '1,715,552,713,641', level: 400, masterLevel: 578 },
  { rank: 3, world: 'Midgard', class: 'Shining Lancer', character: 'HarboDarbo', exp: '1,654,180,383,195', level: 400, masterLevel: 554 },
  { rank: 4, world: 'Nidavellir', class: 'Mystic Knight', character: 'MorTTuS', exp: '1,507,157,695,456', level: 400, masterLevel: 600 },
  { rank: 5, world: 'Midgard', class: 'Mystic Knight', character: 'NaoSouEu', exp: '1,487,334,407,452', level: 400, masterLevel: 489 },
  { rank: 6, world: 'Alfheim', class: 'Luminous Wizard', character: 'TOBIZO', exp: '1,461,386,180,441', level: 400, masterLevel: 658 },
  { rank: 7, world: 'Alfheim', class: 'Luminous Wizard', character: 'SadinoeL', exp: '1,426,567,425,831', level: 400, masterLevel: 552 },
  { rank: 8, world: 'Ydalir', class: 'Luminous Wizard', character: 'Zhongli', exp: '1,394,030,521,260', level: 400, masterLevel: 634 },
  { rank: 9, world: 'Midgard', class: 'Luminous Wizard', character: 'DarkRudeus', exp: '1,369,728,624,274', level: 400, masterLevel: 1049 },
  { rank: 10, world: 'Fresei', class: 'Dragon Knight', character: 'sony2222', exp: '2,461,319,547,157', level: 400, masterLevel: 1053 },
  { rank: 11, world: 'Alfheim', class: 'Luminous Wizard', character: 'QBruceLeeQ', exp: '1,715,552,713,641', level: 400, masterLevel: 578 },
  { rank: 12, world: 'Alfheim', class: 'Luminous Wizard', character: 'QBruceLeeQ', exp: '1,715,552,713,641', level: 400, masterLevel: 578 },
  { rank: 13, world: 'Midgard', class: 'Shining Lancer', character: 'HarboDarbo', exp: '1,654,180,383,195', level: 400, masterLevel: 554 },
  { rank: 14, world: 'Nidavellir', class: 'Mystic Knight', character: 'MorTTuS', exp: '1,507,157,695,456', level: 400, masterLevel: 600 },
  { rank: 15, world: 'Midgard', class: 'Mystic Knight', character: 'NaoSouEu', exp: '1,487,334,407,452', level: 400, masterLevel: 489 },
  { rank: 16, world: 'Alfheim', class: 'Luminous Wizard', character: 'TOBIZO', exp: '1,461,386,180,441', level: 400, masterLevel: 658 },
  { rank: 17, world: 'Alfheim', class: 'Luminous Wizard', character: 'SadinoeL', exp: '1,426,567,425,831', level: 400, masterLevel: 552 },
  { rank: 18, world: 'Ydalir', class: 'Luminous Wizard', character: 'Zhongli', exp: '1,394,030,521,260', level: 400, masterLevel: 634 },
  { rank: 19, world: 'Midgard', class: 'Luminous Wizard', character: 'DarkRudeus', exp: '1,369,728,624,274', level: 400, masterLevel: 1049 },
  { rank: 20, world: 'Fresei', class: 'Dragon Knight', character: 'sony2222', exp: '2,461,319,547,157', level: 400, masterLevel: 1053 },
  { rank: 21, world: 'Fresei', class: 'Dragon Knight', character: 'sony2222', exp: '2,461,319,547,157', level: 400, masterLevel: 1053 },
  { rank: 22, world: 'Alfheim', class: 'Luminous Wizard', character: 'QBruceLeeQ', exp: '1,715,552,713,641', level: 400, masterLevel: 578 },
  { rank: 23, world: 'Midgard', class: 'Shining Lancer', character: 'HarboDarbo', exp: '1,654,180,383,195', level: 400, masterLevel: 554 },
  { rank: 24, world: 'Nidavellir', class: 'Mystic Knight', character: 'MorTTuS', exp: '1,507,157,695,456', level: 400, masterLevel: 600 },
  { rank: 25, world: 'Midgard', class: 'Mystic Knight', character: 'NaoSouEu', exp: '1,487,334,407,452', level: 400, masterLevel: 489 },
  { rank: 26, world: 'Alfheim', class: 'Luminous Wizard', character: 'TOBIZO', exp: '1,461,386,180,441', level: 400, masterLevel: 658 },
  { rank: 27, world: 'Alfheim', class: 'Luminous Wizard', character: 'SadinoeL', exp: '1,426,567,425,831', level: 400, masterLevel: 552 },
  { rank: 28, world: 'Ydalir', class: 'Luminous Wizard', character: 'Zhongli', exp: '1,394,030,521,260', level: 400, masterLevel: 634 },
  { rank: 29, world: 'Midgard', class: 'Luminous Wizard', character: 'DarkRudeus', exp: '1,369,728,624,274', level: 400, masterLevel: 1049 },
  { rank: 30, world: 'Fresei', class: 'Dragon Knight', character: 'sony2222', exp: '2,461,319,547,157', level: 400, masterLevel: 1053 },
];

const itemsPerPage = 10;

const RankingTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="ranking-container">
      <div className="header">
        <h1>Ranking</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search by title" />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      <table className="ranking-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>World</th>
            <th>Class</th>
            <th>Character</th>
            <th>EXP</th>
            <th>Level</th>
            <th>Master Level</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, index) => (
            <tr key={index}>
              <td>{row.rank}</td>
              <td>{row.world}</td>
              <td>{row.class}</td>
              <td>{row.character}</td>
              <td>{row.exp}</td>
              <td>{row.level}</td>
              <td>{row.masterLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

export default RankingTable;
