import React, { FC, memo } from 'react';
import ContentSaveMoveOutlineSvg from '../svg/content-save-move-outline.svg';

export interface IContentSaveMoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveMoveOutlineIcon: FC<IContentSaveMoveOutlineIconProps> = memo(props => {
  return <ContentSaveMoveOutlineSvg {...props} />;
});
