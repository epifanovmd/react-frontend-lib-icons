import React, { FC, memo } from 'react';
import ContentSaveSettingsOutlineSvg from '../svg/content-save-settings-outline.svg';

export interface IContentSaveSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveSettingsOutlineIcon: FC<IContentSaveSettingsOutlineIconProps> = memo(props => {
  return <ContentSaveSettingsOutlineSvg {...props} />;
});
