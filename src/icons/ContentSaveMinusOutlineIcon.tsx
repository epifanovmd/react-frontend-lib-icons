import React, { FC, memo } from 'react';
import ContentSaveMinusOutlineSvg from '../svg/content-save-minus-outline.svg';

export interface IContentSaveMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveMinusOutlineIcon: FC<IContentSaveMinusOutlineIconProps> = memo(props => {
  return <ContentSaveMinusOutlineSvg {...props} />;
});
