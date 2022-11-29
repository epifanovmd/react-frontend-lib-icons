import React, { FC, memo } from 'react';
import ContentSaveMoveSvg from '../svg/content-save-move.svg';

export interface IContentSaveMoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveMoveIcon: FC<IContentSaveMoveIconProps> = memo(props => {
  return <ContentSaveMoveSvg {...props} />;
});
