import React, { FC, memo } from 'react';
import EmoticonFrownSvg from '../svg/emoticon-frown.svg';

export interface IEmoticonFrownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonFrownIcon: FC<IEmoticonFrownIconProps> = memo(props => {
  return <EmoticonFrownSvg {...props} />;
});
