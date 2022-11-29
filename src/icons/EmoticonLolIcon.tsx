import React, { FC, memo } from 'react';
import EmoticonLolSvg from '../svg/emoticon-lol.svg';

export interface IEmoticonLolIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonLolIcon: FC<IEmoticonLolIconProps> = memo(props => {
  return <EmoticonLolSvg {...props} />;
});
