import React, { FC, memo } from 'react';
import AlignVerticalTopSvg from '../svg/align-vertical-top.svg';

export interface IAlignVerticalTopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlignVerticalTopIcon: FC<IAlignVerticalTopIconProps> = memo(props => {
  return <AlignVerticalTopSvg {...props} />;
});
