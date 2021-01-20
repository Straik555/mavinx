import React from 'react';

const MainContent = () => {
    return (
        <div style={{width: '70%', paddingLeft: '40px'}}>
            <div style={{display: 'flex', alignItems: 'baseline', paddingBottom: '15px'}}>
                <h1 style={{fontSize: '22px'}}>Найдено</h1>
                <p style={{paddingLeft: '10px', fontSize: '22px', color: 'silver'}}>(192 Услуги)</p>
            </div>
            <div style={{ background: '#e8e8e8', padding: '25px', borderRadius: '5px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '30px', borderBottom: '1px solid silver'}}>
                    <div style={{display: 'flex', flexDirection: 'column', paddingRight: '90px'}}>
                        <h1 style={{fontWeight: 'bold', fontSize: '18px'}}>Дизайн сайта UI и UX</h1>
                        <p style={{fontSize: '14px', color: 'silver'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at atque dignissimos ducimus ea eligendi et, exercitationem laboriosam magni minus natus nihil odit quaerat quisquam recusandae ullam voluptates? Eveniet, tempora.
                        </p>
                        <div style={{display: 'flex'}}>
                            <span style={{fontSize: '14px', fontWeight: 'bold', paddingRight: '8px'}}>#Landing-page</span>
                            <span style={{fontSize: '14px', fontWeight: 'bold', paddingRight: '8px'}}>#Логотип</span>
                            <span style={{fontSize: '14px', fontWeight: 'bold', paddingRight: '8px'}}>#Промо-сайт</span>
                        </div>
                    </div>
                    <div style={{paddingLeft: '10px', borderLeft: '1px solid silver', width: '200px', height: '120px', display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
                        <h1 style={{fontSize: '19px', marginBottom: '0px'}}>1 840$</h1>
                        <p style={{fontSize: '14px', marginTop: '0px'}}>1-2 месяца</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;