import React, { FC, memo } from 'react';
import FuriganaVerticalSvg from '../svg/furigana-vertical.svg';

export interface IFuriganaVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FuriganaVerticalIcon: FC<IFuriganaVerticalIconProps> = memo(props => {
  return <FuriganaVerticalSvg {...props} />;
});
