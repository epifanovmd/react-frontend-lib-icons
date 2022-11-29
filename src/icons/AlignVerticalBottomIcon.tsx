import React, { FC, memo } from 'react';
import AlignVerticalBottomSvg from '../svg/align-vertical-bottom.svg';

export interface IAlignVerticalBottomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlignVerticalBottomIcon: FC<IAlignVerticalBottomIconProps> = memo(props => {
  return <AlignVerticalBottomSvg {...props} />;
});
