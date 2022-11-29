import React, { FC, memo } from 'react';
import ContentSaveAlertOutlineSvg from '../svg/content-save-alert-outline.svg';

export interface IContentSaveAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveAlertOutlineIcon: FC<IContentSaveAlertOutlineIconProps> = memo(props => {
  return <ContentSaveAlertOutlineSvg {...props} />;
});
