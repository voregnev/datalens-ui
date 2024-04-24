import React from 'react';
import {Button} from '@gravity-ui/uikit';

import {ActionBar} from '@gravity-ui/navigation';
import {Skeleton} from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import {useSelector} from 'react-redux';

import {selectAsideHeaderData} from '../../../../store/selectors/asideHeader';
import {Layout, SkeletonsSettings} from '../../contexts/LayoutContext';

import './CollectionsNavigationLayout.scss';
import {AuthContext} from 'ui/datalens/index';

const b = block('dl-collections-navigation-layout');

const DEFAULT_SKELETONS_SETTINGS = {
    actionsPanelLeftBlock: {
        width: '250px',
        height: '26px',
    },
    actionsPanelRightBlock: {
        width: '170px',
        height: '26px',
    },
    title: {
        width: '150px',
        height: '28px',
    },
    titleActionsBlock: {
        width: '28px',
        height: '28px',
    },
    titleRightBlock: {
        width: '80px',
        height: '28px',
    },
    description: {
        width: '100%',
        height: '28px',
    },
};

type Props = {
    layout: Layout;
    skeletonsSettings: SkeletonsSettings;
    children?: React.ReactNode;
};

export const CollectionsNavigationLayout = React.memo<Props>(
    // eslint-disable-next-line complexity
    ({layout, skeletonsSettings, children}) => {
        const auth = React.useContext(AuthContext);
        const asideHeaderData = useSelector(selectAsideHeaderData);
        const asideHeaderSize = asideHeaderData.size || 0;

        let userName = "";
        if(auth.token) {
            var decodedString = atob(auth.token);
            userName = decodedString.split(':')[0];
        }
        
        return (
            <div className={b()}>
                {(layout.actionsPanelLeftBlock || layout.actionsPanelRightBlock) && (
                    <ActionBar>
                        <ActionBar.Section type="primary">
                            <ActionBar.Group pull="left">
                                {layout.actionsPanelLeftBlock && (
                                    <ActionBar.Item>
                                        {layout.actionsPanelLeftBlock.isLoading ? (
                                            <Skeleton
                                                style={
                                                    skeletonsSettings.actionsPanelLeftBlock
                                                        ? skeletonsSettings.actionsPanelLeftBlock
                                                        : DEFAULT_SKELETONS_SETTINGS.actionsPanelLeftBlock
                                                }
                                            />
                                        ) : (
                                            layout.actionsPanelLeftBlock.content
                                        )}
                                    </ActionBar.Item>
                                )}
                            </ActionBar.Group>
                            <ActionBar.Group pull="right">
                                <ActionBar.Item>
                                    {layout.actionsPanelRightBlock && (
                                        <div>
                                            {layout.actionsPanelRightBlock.isLoading ? (
                                                <Skeleton
                                                    style={
                                                        skeletonsSettings.actionsPanelRightBlock
                                                            ? skeletonsSettings.actionsPanelRightBlock
                                                            : DEFAULT_SKELETONS_SETTINGS.actionsPanelRightBlock
                                                    }
                                                />
                                            ) : (
                                                layout.actionsPanelRightBlock.content
                                            )}
                                        </div>
                                    )}
                                </ActionBar.Item>
                                <ActionBar.Item>{userName}</ActionBar.Item>
                                <ActionBar.Item>{auth.token && <Button view="outlined" onClick={()=>auth.setToken("")}>Выйти</Button> }</ActionBar.Item>
                            </ActionBar.Group>
                        </ActionBar.Section>
                    </ActionBar>
                )}

                <div className={b('page-wrapper')} style={{left: `${asideHeaderSize}px`}}>
                    <div className={b('page')}>
                        <div className={b('header')}>
                            {layout.title || layout.titleActionsBlock ? (
                                <div className={b('header-title-wrapper')}>
                                    {layout.title && (
                                        <h1 className={b('header-title')}>
                                            {layout.title.isLoading ? (
                                                <Skeleton
                                                    style={
                                                        skeletonsSettings.title
                                                            ? skeletonsSettings.title
                                                            : DEFAULT_SKELETONS_SETTINGS.title
                                                    }
                                                />
                                            ) : (
                                                layout.title.content
                                            )}
                                        </h1>
                                    )}
                                    {layout.titleActionsBlock && (
                                        <div className={b('header-title-actions-block')}>
                                            {layout.titleActionsBlock.isLoading ? (
                                                <Skeleton
                                                    style={
                                                        skeletonsSettings.titleActionsBlock
                                                            ? skeletonsSettings.titleActionsBlock
                                                            : DEFAULT_SKELETONS_SETTINGS.titleActionsBlock
                                                    }
                                                />
                                            ) : (
                                                layout.titleActionsBlock.content
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : null}

                            {layout.titleRightBlock && (
                                <div className={b('header-right-block')}>
                                    {layout.titleRightBlock.isLoading ? (
                                        <Skeleton
                                            style={
                                                skeletonsSettings.titleRightBlock
                                                    ? skeletonsSettings.titleRightBlock
                                                    : DEFAULT_SKELETONS_SETTINGS.titleRightBlock
                                            }
                                        />
                                    ) : (
                                        layout.titleRightBlock.content
                                    )}
                                </div>
                            )}
                        </div>

                        {layout.description && (
                            <div className={b('header-description')}>
                                {layout.description.isLoading ? (
                                    <Skeleton
                                        style={
                                            skeletonsSettings.description
                                                ? skeletonsSettings.description
                                                : DEFAULT_SKELETONS_SETTINGS.description
                                        }
                                    />
                                ) : (
                                    layout.description.content
                                )}
                            </div>
                        )}

                        {children && <div className={b('content')}>{children}</div>}
                    </div>
                </div>
            </div>
        );
    },
);

CollectionsNavigationLayout.displayName = 'CollectionsNavigationLayout';
