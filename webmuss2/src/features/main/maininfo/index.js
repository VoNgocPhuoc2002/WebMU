import React from 'react';
import './styles.scss';

const MainInfo = () => {
    return (
        <div className="main-info">
            <div className="rankings">
                <h2>Rankings</h2>
                <div className="dropdowns">
                    <select>
                        <option value="pk_kill">PK Kill</option>
                    </select>
                    <select>
                        <option value="midgard">Midgard</option>
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Character</th>
                            <th>PK Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>HambreWW3</td>
                            <td>53</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>HambreWW2</td>
                            <td>44</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>SteveJobs1</td>
                            <td>42</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>HambreWW1</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>DriK</td>
                            <td>34</td>
                        </tr>
                    </tbody>
                </table>
                {/* <a href="#" className="more">More</a> */}
            </div>
            <div className="hall-of-fame">
                <h2>Hall of Fame</h2>
                <div className="dropdowns">
                    <select>
                        <option value="blood_castle_7">Blood_Castle_7</option>
                    </select>
                    <select>
                        <option value="all">All</option>
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Character</th>
                            <th>Acquired Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>SnowDen</td>
                            <td>7,245</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>MasterYOO</td>
                            <td>7,245</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>ChikiLayer</td>
                            <td>7,245</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Sadzazam</td>
                            <td>7,245</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>JAVIERBOZO</td>
                            <td>7,245</td>
                        </tr>
                    </tbody>
                </table>
                {/* <a href="#" className="more">More</a> */}
            </div>
            {/* <div className="guides">
                <div className="guide">
                    <img src="path/to/update-guides.png" alt="Update Guides" />
                    <a href="#" className="go">GO</a>
                </div>
                <div className="guide">
                    <img src="path/to/beginners-guide.png" alt="Beginner's Guide" />
                    <a href="#" className="go">GO</a>
                </div>
            </div> */}
        </div>
    );
};

export default MainInfo;
