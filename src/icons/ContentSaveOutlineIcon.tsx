import React, { FC, memo } from 'react';
import ContentSaveOutlineSvg from '../svg/content-save-outline.svg';

export interface IContentSaveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveOutlineIcon: FC<IContentSaveOutlineIconProps> = memo(props => {
  return <ContentSaveOutlineSvg {...props} />;
});
