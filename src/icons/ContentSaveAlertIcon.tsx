import React, { FC, memo } from 'react';
import ContentSaveAlertSvg from '../svg/content-save-alert.svg';

export interface IContentSaveAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveAlertIcon: FC<IContentSaveAlertIconProps> = memo(props => {
  return <ContentSaveAlertSvg {...props} />;
});
