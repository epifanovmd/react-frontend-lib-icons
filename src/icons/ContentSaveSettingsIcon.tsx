import React, { FC, memo } from 'react';
import ContentSaveSettingsSvg from '../svg/content-save-settings.svg';

export interface IContentSaveSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveSettingsIcon: FC<IContentSaveSettingsIconProps> = memo(props => {
  return <ContentSaveSettingsSvg {...props} />;
});
