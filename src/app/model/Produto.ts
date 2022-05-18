export class Produto{
    public idProduto: number;
    public nomeProduto: string;
    public modeloProduto: string;
    public imagemProduto: string;
    public descricaoProduto: string;
    public precoProduto: number;
    public estoqueProduto: number;

    public constructor(_idProduto: number, _nomeProduto: string, _modeloProduto: string, _imagemProduto: string, _descricaoProduto: string, _precoProduto: number, _estoqueProduto: number){

        this.idProduto = _idProduto;
        this.nomeProduto = _nomeProduto;
        this.modeloProduto = _modeloProduto;
        this.imagemProduto = _imagemProduto;
        this.descricaoProduto = _descricaoProduto;
        this.precoProduto = _precoProduto;
        this.estoqueProduto = _estoqueProduto;

    }
}