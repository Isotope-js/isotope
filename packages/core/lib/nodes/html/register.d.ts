import { Directive, IsotopeNode, IsotopeNodeConfig } from "../../node";
import { Indexable } from "../../declarations";
declare type Child = <S extends Indexable = any, C extends Indexable = any>(config?: IsotopeNodeConfig<S, C> | string | Directive<S, C, void> | Array<Directive<S, C, void>>) => IsotopeNode<S, C>;
/**
 * Registers new Node child function.
 *
 * @param name - Name for the child.
 */
declare const registerChild: (name: string) => void;
export { Child, registerChild };
