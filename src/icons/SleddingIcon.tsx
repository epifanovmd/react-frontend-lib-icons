import React, { FC, memo } from 'react';
import SleddingSvg from '../svg/sledding.svg';

export interface ISleddingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SleddingIcon: FC<ISleddingIconProps> = memo(props => {
  return <SleddingSvg {...props} />;
});
