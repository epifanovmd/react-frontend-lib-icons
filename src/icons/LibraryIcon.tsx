import React, { FC, memo } from 'react';
import LibrarySvg from '../svg/library.svg';

export interface ILibraryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LibraryIcon: FC<ILibraryIconProps> = memo(props => {
  return <LibrarySvg {...props} />;
});
