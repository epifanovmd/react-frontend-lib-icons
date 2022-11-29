import React, { FC, memo } from 'react';
import EmoticonWinkSvg from '../svg/emoticon-wink.svg';

export interface IEmoticonWinkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonWinkIcon: FC<IEmoticonWinkIconProps> = memo(props => {
  return <EmoticonWinkSvg {...props} />;
});
